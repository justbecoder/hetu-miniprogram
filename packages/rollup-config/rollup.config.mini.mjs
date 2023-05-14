import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "index.js",
      format: "cjs",
      banner: "/** 该文件由源码编译生成，请勿直接修改该文件 */",
      exports: "named",
      name: "main",
    },
  ],
  plugins: [
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    commonjs(),
    json(),
  ],
  external: ["wx-server-sdk"],
};
