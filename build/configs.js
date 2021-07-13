const { join } = require('path');
const { lstatSync, readdirSync } = require('fs');

import plugins from './plugins';
import pkg from '../package.json';

function isDirectory(dirPath) {
  return lstatSync(dirPath).isDirectory();
}

const components = [];
const dir = join(__dirname, 'components');
const files = readdirSync(dir);

files.forEach(name => {
    const path = join(dir, name);
    if (isDirectory(path)) {
      components.push({
        name,
        path: `components/${name}`
      });
    }
});

const fullBundle = `${pkg.name}.all`;
components.push({
  name: fullBundle,
  path: 'components'
});

function createRollupConfig({ path, name }) {
  const output = ['esm', 'umd'].map((item) => ({
    dir: name === fullBundle ? `dist/${item}` : `dist/${item}/${name}`,
    format: item,
    name
  }));

  return {
    input: path + '/index.ts',
    output,
    plugins,
    external: ['vue']
  }
}

const configs = components.map(item => createRollupConfig(item));

export default configs;
