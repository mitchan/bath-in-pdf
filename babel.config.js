module.exports = {
    presets: [
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
    ],
    exclude: 'node_modules/**',
    env: {
        /**
         * TEST
         */
        test: {
            presets: [
                [
                    '@babel/preset-env', {
                        useBuiltIns: 'usage',
                        targets: {
                            node: 'current',
                        },
                        corejs: {
                            version: '3'
                        },
                    }
                ]
            ]
        }
    }
};
