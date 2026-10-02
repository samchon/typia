import test from "node:test";

import { test_vercel_http_controller_output_validation } from "./features/test_vercel_http_controller_output_validation";
import { test_vercel_http_controller_register } from "./features/test_vercel_http_controller_register";

/** Reads repeated one-value include/exclude switches for this unit runner. */
const getArguments = (key: string): string[] => {
  const values: string[] = [];
  for (let i = 0; i < process.argv.length; i++)
    if (process.argv[i] === `--${key}` && i + 1 < process.argv.length)
      values.push(process.argv[++i]!);
  return values;
};
const include: string[] = getArguments("include");
const exclude: string[] = getArguments("exclude");
const cases = [
  {
    name: "test_vercel_http_controller_register",
    execute: test_vercel_http_controller_register,
  },
  {
    name: "test_vercel_http_controller_output_validation",
    execute: test_vercel_http_controller_output_validation,
  },
];

// Each named callback is registered independently, so node:test reports a
// failing assertion without concealing the other portable case.
for (const entry of cases)
  if (
    (include.length === 0 ||
      include.some((value) => entry.name.includes(value))) &&
    (exclude.length === 0 ||
      exclude.every((value) => !entry.name.includes(value)))
  )
    test(entry.name, entry.execute);
