import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import useTypeSafeTranslation from 'shared/hooks/useTypeSafeTranslation';

const Home = () => {
  const { t } = useTypeSafeTranslation();
  const router = useRouter();

  const onLogin = () => {
    router.push('/login');
  };

  return <button onClick={onLogin}>{t('button.login')}</button>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string)),
    },
  };
}

export default Home;
