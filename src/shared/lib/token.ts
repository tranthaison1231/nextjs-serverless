import { Context } from '@apollo/client';
import { Auth, withSSRContext } from 'aws-amplify';

export const getToken = async (context?: Context) => {
  const auth = context ? withSSRContext(context).Auth : Auth;
  return (await auth.currentSession()).getIdToken().getJwtToken();
};
