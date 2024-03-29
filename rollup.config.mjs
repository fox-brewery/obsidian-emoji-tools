import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import css from 'rollup-plugin-import-css'
export default {
	input: 'src/main.ts',
	output: {
		format: 'cjs',
		file: 'main.js',
		sourcemap: 'inline',
		exports: 'default',
	},
	external: ['obsidian', 'fs', 'os', 'path'],
	plugins: [
		nodeResolve({
			browser: true,
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			preventAssignment: false,
		}),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.ts', '.tsx'],
		}),
		commonjs(),
		json(),
		css(),
	],
}
