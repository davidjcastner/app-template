/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default'],
        }),
    ],
};
