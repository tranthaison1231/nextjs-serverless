/* eslint-disable  */
import * as Types from './schemas';

import * as Operations from './schemas';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import type { NormalizedCacheObject } from '@apollo/client';
export async function getServerPageGetCountries(
  options: Omit<Apollo.QueryOptions<Types.GetCountriesQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>,
) {
  const data = await apolloClient.query<Types.GetCountriesQuery>({
    ...options,
    query: Operations.GetCountriesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetCountries = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetCountriesQuery,
    Types.GetCountriesQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetCountriesDocument, options);
};
export type PageGetCountriesComp = React.FC<{
  data?: Types.GetCountriesQuery;
  error?: Apollo.ApolloError;
}>;
export const ssrGetCountries = {
  getServerPage: getServerPageGetCountries,

  usePage: useGetCountries,
};
