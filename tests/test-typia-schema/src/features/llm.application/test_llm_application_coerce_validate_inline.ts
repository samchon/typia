import { ILlmApplication, ILlmFunction } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the typia-only inliner pattern `func.validate(func.coerce(args))`.
 *
 * Issue #1974: a consumer that inlines MCP-style `tools/call` registration over
 * `typia.llm.controller` output (to avoid pinning `@typia/mcp` /
 * `@typia/utils`) must coerce before validating, or the loosely-typed values
 * LLMs emit are rejected. Since every `ILlmFunction` carries `coerce` and
 * `validate` bound to its own schema, that correct pipeline is reachable with
 * only `typia`. This pins that the bound `coerce` closes the gap the bare
 * `validate` leaves open.
 *
 * 1. Build a function whose parameter has a number and a boolean field.
 * 2. Feed a stringified `"12"` / `"true"` payload.
 * 3. Assert `validate(coerce(args))` succeeds with coerced data while the bare
 *    `validate(args)` rejects it, and omitted arguments still fail.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (coerce+validate succeeds; value coerced; flag coerced; bare validate rejects loose payload; omitted arguments fail). The case documents its purpose as: Verifies the typia-only inliner pattern `func.validate(func.coerce(args))`.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Issue #1974: a consumer that inlines MCP-style `tools/call` registration over `typia.llm.controller` output (to avoid pinning `@typia/mcp` / `@typia/utils`) must coerce before validating, or the loosely-typed values LLMs emit are rejected. Since every `ILlmFunction` carries `coerce` and `validate` bound to its own schema, that correct pipeline is reachable with only `typia`. This pins that the bound `coerce` closes the gap the bare `validate` leaves open. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (coerce+validate succeeds; value coerced; flag coerced; bare validate rejects loose payload; omitted arguments fail) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_coerce_validate_inline is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_coerce_validate_inline = (): void => {
  interface ICalculator {
    add(input: { value: number; flag: boolean }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();
  const func: ILlmFunction | undefined = app.functions[0];
  if (func === undefined) throw new Error("function not generated");

  const loose = { value: "12", flag: "true" };

  const ok = func.validate(func.coerce(loose));
  TestEquality.equals("coerce+validate succeeds", ok.success, true);
  if (ok.success) {
    const data = ok.data as { value: number; flag: boolean };
    TestEquality.equals("value coerced", data.value, 12);
    TestEquality.equals("flag coerced", data.flag, true);
  }

  // bare validate (no coercion) rejects the same payload — the gap coercion closes
  TestEquality.equals(
    "bare validate rejects loose payload",
    func.validate(loose).success,
    false,
  );

  // omitted arguments still fail (coerce of {} leaves required fields missing)
  TestEquality.equals(
    "omitted arguments fail",
    func.validate(func.coerce({})).success,
    false,
  );
};
