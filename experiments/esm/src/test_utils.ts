import { LlmTypeChecker, NamingConvention, dedent } from "@typia/utils";

import { check } from "./internal/asserts.js";

/**
 * Verifies `@typia/utils` exposes working named exports under Node ESM.
 *
 * The previous build's `index.mjs` re-exported only `default`, so `import {
 * NamingConvention } from "@typia/utils"` was a syntax error at import time for
 * every ESM consumer.
 */
export const test_utils = (): void => {
  check(
    "NamingConvention.camel works",
    NamingConvention.camel("hello_world") === "helloWorld",
  );
  check(
    "NamingConvention.snake works",
    NamingConvention.snake("helloWorld") === "hello_world",
  );
  check("LlmTypeChecker namespace is live", typeof LlmTypeChecker === "object");
  check("dedent is callable", typeof dedent === "function");
};
