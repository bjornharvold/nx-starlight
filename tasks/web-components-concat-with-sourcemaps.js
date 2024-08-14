/*
 * Copyright (c) wink.travel 2024
 */
const esbuild = require('esbuild');
const glob = require('glob');

const { resolve, relative,  } = require('path');
const { writeFileSync, createFile } = require('fs-extra');

console.log('Concatenating Web Components base javascript for easier consumption...');

createFile('./dist/apps/web-components/browser/elements.js')
.then(file => {
  const elementsJsFile = resolve('.', 'dist', 'apps', 'web-components', 'browser', 'elements.js');
  console.log('writing to file', elementsJsFile);

  writeFileSync(elementsJsFile,
    `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
  import './polyfills.js';
  import './main.js';
  `, { encoding: 'utf-8' });
});


// esbuild
//     .build({
//         stdin: { contents: '' },
//         inject: glob.sync('dist/apps/web-components/browser/{polyfills,main}.js'),
//         bundle: true,
//         sourcemap: true,
//         minify: true,
//         outfile: 'dist/apps/web-components/browser/elements.js',
//     })
//     .then(() => console.log("⚡ Javascript build complete! ⚡"))
//     .catch(() => process.exit(1))
