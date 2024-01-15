/**
 * @type {import('rollup').RollupOptions}
*/
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import typescript from '@rollup/plugin-typescript';
import css from "rollup-plugin-import-css";
import postcss from "rollup-plugin-postcss";

export default {
    input: "src/index.tsx",
    output: [
        {
            format: "cjs",
            file: "dist/index.js"
        },
        {
            file: "dist/index.es.js",
            format: "es",
            exports: "named"
        }
    ],
    plugins: [
        postcss({
            plugins: [],
            minimize: true
        }),
        typescript({
            compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5", allowSyntheticDefaultImports: true, jsx: "react" }
        }),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"]
        }),
        external(),
        resolve(),
        terser(),
    ]
}