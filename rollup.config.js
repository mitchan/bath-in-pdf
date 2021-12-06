import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import { eslint } from "rollup-plugin-eslint";

const babelConfig = require("./babel.config");

const LIB_NAME = "lib/react-pdf";
const LIB_ENTRY = "src/index.jsx";

export default [
  {
    input: LIB_ENTRY,
    output: [{ file: "lib/pkg.js", format: "cjs", sourcemap: false }],
    plugins: [
      eslint({ exclude: ["**/*.scss", "**/*.css", "**/*.sass", "**/*.html"] }),
      json(),
      babel({
        babelrc: false,
        ...babelConfig,
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "usage",
              modules: false,
              corejs: { version: "3" },
              targets: {
                node: "10",
              },
            },
          ],
        ],
      }),
      commonjs(),
    ],
  },
];
