import { TestValidator } from "@nestia/e2e";
import { ILlmApplication, ILlmFunction } from "@typia/interface";
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
  TestValidator.equals("coerce+validate succeeds", ok.success, true);
  if (ok.success) {
    const data = ok.data as { value: number; flag: boolean };
    TestValidator.equals("value coerced", data.value, 12);
    TestValidator.equals("flag coerced", data.flag, true);
  }

  // bare validate (no coercion) rejects the same payload — the gap coercion closes
  TestValidator.equals(
    "bare validate rejects loose payload",
    func.validate(loose).success,
    false,
  );

  // omitted arguments still fail (coerce of {} leaves required fields missing)
  TestValidator.equals(
    "omitted arguments fail",
    func.validate(func.coerce({})).success,
    false,
  );
};
