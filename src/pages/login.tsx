import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useTypeSafeTranslation from 'shared/hooks/useTypeSafeTranslation';

const Login = () => {
  const { t } = useTypeSafeTranslation();

  return <div>{t('button.login')}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
    },
  };
}

export default Login;
