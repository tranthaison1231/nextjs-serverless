const fs = require('fs-extra');
const localeSrc = './public/locales';
const localeDest = './.serverless_nextjs/default-lambda/public/locales';
fs.copySync(localeSrc, localeDest, { recursive: true });
