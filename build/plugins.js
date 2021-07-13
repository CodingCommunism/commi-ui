import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

const extensions = ['.ts', '.js', '.tsx'];
export default [
  typescript({
    tsconfigOverride: { compilerOptions: { declaration: false } }
  }),
  vue(),
  resolve({ mainFields: ['module', 'main', 'browser'] }),
  commonjs({ extensions, sourceMap: true }),
  babel({ babelHelpers: 'bundled', extensions }),
];
