import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals","next/typescript"),
  { ignores:[".next/**","node_modules/**","coverage/**","playwright-report/**"] }
];

export default config;
