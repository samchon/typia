import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmFunction } from "@typia/interface";
import typia, { LlmJson } from "typia";

/**
 * Verifies typia re-exports LlmJson so inliners need only a `typia` dependency.
 *
 * Issue #1974: a consumer that inlines MCP-style `tools/call` registration over
 * `typia.llm.controller` output wants to avoid pinning `@typia/mcp` /
 * `@typia/utils`. Re-exporting `LlmJson` from `typia` lets such a consumer
 * reach both the coercion step (`validateArguments`) and the LLM-feedback
 * formatter (`stringify`) through the single `typia` import. This locks that
 * the named export and the default-namespace access both resolve and behave.
 *
 * 1. Import `LlmJson` from `typia` (named) and via the default namespace.
 * 2. Run a coercible payload through `typia`'s `LlmJson.validateArguments`.
 * 3. Assert coercion succeeds and `LlmJson.stringify` formats a failure.
 */
export const test_llm_application_validate_arguments_reexport = (): void => {
  interface ICalculator {
    add(input: { value: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();
  const func: ILlmFunction | undefined = app.functions[0];
  if (func === undefined) throw new Error("function not generated");

  // named export and default-namespace access are the same object
  TestValidator.equals("named === namespace", LlmJson, typia.LlmJson);

  // coercion reachable through the single `typia` pin
  const ok = LlmJson.validateArguments<{ value: number }>(func, {
    value: "42",
  });
  TestValidator.equals(
    "reexported validateArguments coerces",
    ok.success,
    true,
  );
  if (ok.success) TestValidator.equals("value coerced", ok.data.value, 42);

  // failure formatting reachable too (what an inliner feeds back to the model)
  const bad = LlmJson.validateArguments(func, { value: "not-a-number" });
  TestValidator.equals("bad payload fails", bad.success, false);
  if (!bad.success)
    TestValidator.predicate(
      "stringify annotates the failure",
      () => typia.LlmJson.stringify(bad).length > 0,
    );
};
