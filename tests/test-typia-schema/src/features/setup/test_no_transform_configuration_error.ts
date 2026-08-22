import { TestValidator } from "@nestia/e2e";
import typia from "typia";

const EXPECTED = [
  "Error on typia.json.schema(): no transform has been configured.",
  "",
  [
    "Build the project with `ttsc` (not stock `tsc`), run TypeScript",
    "with `ttsx`, or configure `@ttsc/unplugin` for a bundler.",
    "These toolchains discover typia's native transform automatically.",
  ].join(" "),
  "",
  "If `ttsc` is missing, install it with `npm i -D ttsc typescript`.",
  "",
  [
    "If setup is already complete, run `npx ttsc --noEmit` to",
    "surface the underlying TypeScript or typia transform error.",
  ].join(" "),
  "",
  [
    "Stock `tsc`, `ts-node`, `tsx`, Babel, and SWC do not load",
    "typia's transform on their own.",
  ].join(" "),
  "",
  "See https://typia.io/docs/setup for setup and bundler instructions.",
].join("\n");

/**
 * Verifies that an untransformed typia call explains every supported setup.
 *
 * Issue #2373 exposed a runtime fallback that could only recommend the wrong
 * compiler command, while the actual intersection diagnostic is available at
 * transform time. An indirect alias deliberately avoids the call-expression
 * transformer so this test can exercise that fallback without weakening the
 * native diagnostic.
 *
 * 1. Alias `typia.json.schema` so the invocation remains untransformed.
 * 2. Require the fallback to identify the API, supported toolchains, diagnostic
 *    command, unsupported compilers, and setup documentation.
 */
export const test_no_transform_configuration_error = (): void => {
  const schema: () => never = typia.json.schema;

  let caught: unknown;
  try {
    schema();
  } catch (error) {
    caught = error;
  }
  if (!(caught instanceof Error))
    throw new Error("The untransformed schema call must throw an Error.");
  TestValidator.equals("no transform guidance", EXPECTED, caught.message);
};
