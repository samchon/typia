import test from "node:test";

import { test_jev_questions } from "./features/test_jev_questions";
import { test_jev_typesafe_sdk_contract } from "./features/test_jev_typesafe_sdk_contract";

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
  { name: "test_jev_questions", execute: test_jev_questions },
  {
    name: "test_jev_typesafe_sdk_contract",
    execute: test_jev_typesafe_sdk_contract,
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
