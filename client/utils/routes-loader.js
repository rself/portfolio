/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const toRegExp = require('path-to-regexp');

function escape(text) {
  return text.replace('\'', '\\\'').replace('\\', '\\\\');
}

/**
 * Converts application routes from JSON to JavaScript. For example, a route like
 *
 *   {
 *     "path": "/about",
 *     "page": "./pages/about"
 *   }
 *
 * becomes
 *
 *   {
 *     path: '/about',
 *     pattern: /^\\/about(?:\/(?=$))?$/i,
 *     keys: [],
 *     page: './pages/about',
 *     load: function () { return new Promise(resolve => require(['./pages/about'], resolve)); }
 *   }
 */
module.exports = function routesLoader(source) {
  this.cacheable();

  const output = ['[\n'];
  const routes = JSON.parse(source);

  for (const route of routes) {
    const keys = [];
    const pattern = toRegExp(route.path, keys);
    const require = route.chunk && route.chunk === 'main' ?
      module => `Promise.resolve(require('${escape(module)}').default)` :
      module => `System.import('${escape(module)}').then(x => x.default)`;
    output.push('  {\n');
    output.push(`    path: '${escape(route.path)}',\n`);
    output.push(`    pattern: ${pattern.toString()},\n`);
    output.push(`    keys: ${JSON.stringify(keys)},\n`);
    output.push(`    view: '${escape(route.view)}',\n`);
    if (route.data) {
      output.push(`    data: ${JSON.stringify(route.data)},\n`);
    }
    output.push(`    load() {\n      return ${require(route.view)};\n    },\n`);

    output.push('  },\n');
  }

  output.push(']');

  return `module.exports = ${output.join('')};`;
};
