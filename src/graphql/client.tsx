import { ApolloClient, ApolloLink, from } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import * as Sentry from '@sentry/nextjs';
import { onError } from 'apollo-link-error';
import { cache } from './cache';
import { getToken } from 'shared/lib/token';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL,
});

const withToken = setContext(async (_operation, prevContext) => {
  const token = await getToken(prevContext);
  return { token: token };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers, token } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
      platform: 'admin',
    },
  });
  return forward(operation);
});

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      Sentry.captureMessage(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError && 'statusCode' in networkError) {
    Sentry.captureException(networkError);
  }
}) as unknown as ApolloLink;

export const client = new ApolloClient({
  cache,
  ssrMode: true,
  link: from([withToken, authMiddleware, errorHandler, httpLink]),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  connectToDevTools: !process.env.NODE_ENV,
});
