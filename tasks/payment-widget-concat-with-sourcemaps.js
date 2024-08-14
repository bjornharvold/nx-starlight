/*
 * Copyright (c) wink.travel 2024
 */
const esbuild = require('esbuild');
const glob = require('glob');

console.log('Concatenating Payment Widget base javascript for easier consumption...');

esbuild
    .build({
        stdin: { contents: '' },
        inject: glob.sync('dist/apps/payment-widget/browser/{polyfills,main}.js'),
        bundle: true,
        sourcemap: true,
        minify: true,
        outfile: 'dist/apps/payment-widget/browser/elements.js',
    })
    .then(() => console.log("⚡ Javascript build complete! ⚡"))
    .catch(() => process.exit(1))
