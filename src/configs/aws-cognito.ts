import Amplify from 'aws-amplify';

const AWS_CONFIG = {
  aws_cognito_identity_pool_id:
    process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
  aws_user_pools_web_client_id:
    process.env.NEXT_PUBLIC_AWS_USER_POOL_WEB_CLIENT_ID,
  ssr: true,
};

Amplify.configure(AWS_CONFIG);
