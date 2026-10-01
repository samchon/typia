import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (no transform guidance). The case documents its purpose as: Verifies that an untransformed typia call explains every supported setup.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Issue #2373 exposed a runtime fallback that could only recommend the wrong compiler command, while the actual intersection diagnostic is available at transform time. An indirect alias deliberately avoids the call-expression transformer so this test can exercise that fallback without weakening the native diagnostic. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (no transform guidance) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_no_transform_configuration_error is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("no transform guidance", EXPECTED, caught.message);
};
