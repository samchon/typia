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
 * @evidence contracts/testing.md#behavioral-verification The generated add function binds coerce and validate: string value/flag becomes 12/true and validates, bare validation rejects that same payload, and a missing-field payload still fails.
 * @evidence contracts/testing.md#independent-expectations Literal 12 and true follow the declared number/boolean parameters and supported coercion; false verdicts follow required fields and bare type validation, independently of the generated schema.
 * @evidence contracts/testing.md#distinguishing-cases Coerce-then-validate, bare validate, and omitted required arguments separate the three paths. The data assertions run only after an independently asserted successful result.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_coerce_validate_inline is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.controller, typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.controller, typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Coerce-then-validate, bare validate, and omitted required arguments separate the three paths. The data assertions run only after an independently asserted successful result. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
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
