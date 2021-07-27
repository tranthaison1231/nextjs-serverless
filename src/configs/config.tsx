export const formConfig = {
  validateMessages: {
    required: 'Please enter ${label}!',
    whitespace: ' ${label} cannot be empty!',
    string: {
      min: '${label} must be miximun ${min} characters.',
      max: '${label} must be maximum ${max} characters.',
    },
    types: {
      number: '${label} must be number.',
    },
    pattern: {
      mismatch: '${label} is not valid!',
    },
  },
  requiredMark: true,
};

export const SEO = {
  aplicationName: 'Recipes',
  title: 'Recipes | Explore the best recipes',
  description: 'Explore the best recipes.',
  openGraph: {
    url: 'recipes-next-hasura.vercel.app',
    title: 'Recipes | Explore the best recipes',
    description: 'Explore the best recipes.',
    images: [
      {
        url: 'https://github.com/LauraBeatris/recipes-next-hasura/blob/master/.github/docs/logo.png',
        width: 1200,
        height: 630,
        alt: 'Recipes | Explore the best recipes',
      },
    ],
    site_name: 'Recipes',
  },
  twitter: {
    handle: '@lauradotjs',
    site: '@lauradotjs',
    cardType: 'summary_large_image',
  },
};
