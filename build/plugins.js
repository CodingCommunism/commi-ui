import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import postcssScss from 'postcss-scss'
import vue from 'rollup-plugin-vue'
import progress from 'rollup-plugin-progress'
import fileSize from 'rollup-plugin-filesize'
import url from 'rollup-plugin-url'
import base64 from 'postcss-base64'
import autoprefixer from 'autoprefixer'

const extensions = ['.ts', '.js', '.tsx']
export default [
  typescript({
    tsconfigOverride: { compilerOptions: { declaration: false } },
  }),
  vue(),
  resolve({ mainFields: ['module', 'main', 'browser'] }),
  commonjs({ extensions, sourceMap: true }),
  babel({ babelHelpers: 'bundled', extensions }),
  postcss({
    extract: true,
    parser: postcssScss,
    plugins: [
      base64({
        extensions: ['.png', '.jpeg'],
        root: './components/',
      }),
      autoprefixer({ add: true }),
    ],
  }),
  url({
    limit: 10 * 1024,
  }),
  progress(),
  fileSize(),
]
