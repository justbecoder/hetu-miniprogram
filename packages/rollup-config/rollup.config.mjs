import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
  ],
};
