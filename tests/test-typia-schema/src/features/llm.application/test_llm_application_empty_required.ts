import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies LLM applications keep empty parameter shell fields in every mode.
 *
 * The application composer synthesizes an empty parameter schema for functions
 * without arguments. That shell must stay explicit for AI function calling even
 * after the OpenAPI schema generator omits empty `required` arrays.
 *
 * 1. Generate default and strict applications with a no-argument function.
 * 2. Locate the single generated function in each application.
 * 3. Assert both parameter object shells keep explicit empty fields.
 *
 * @evidence contracts/testing.md#behavioral-verification Default and strict no-argument ping applications each retain the generated function and the explicit empty parameter object shell.
 * @evidence contracts/testing.md#independent-expectations assertShell projects type, properties, required and additionalProperties against a handwritten object/empty-map/empty-array/false expectation; function existence is asserted before the projection.
 * @evidence contracts/testing.md#distinguishing-cases The zero-parameter boundary is checked in default and strict modes, preserving explicit empty fields instead of silently dropping them. Nonempty parameters are covered by application_schema_converter_matrix.
 * @evidence contracts/testing.md#execution-ownership test_llm_application_empty_required is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.application through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer/emitter connects the declared methods, parameter/output types, documentation and options to the runtime application/controller fields exercised here. Portable utility calls on handwritten schemas cannot prove this generated assembly or custom callback wiring.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.application call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The zero-parameter boundary is checked in default and strict modes, preserving explicit empty fields instead of silently dropping them. Nonempty parameters are covered by application_schema_converter_matrix. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_application_empty_required = (): void => {
  interface IController {
    ping(): void;
  }
  type IStrict = { strict: true };

  const defaultApp = typia.llm.application<IController>();
  const defaultFunc = defaultApp.functions.find((f) => f.name === "ping");

  TestValidator.predicate(
    "default function exists",
    () => defaultFunc !== undefined,
  );
  if (defaultFunc !== undefined)
    assertShell("default empty application parameters", defaultFunc.parameters);

  const app = typia.llm.application<IController, IStrict>();
  const func = app.functions.find((f) => f.name === "ping");

  TestValidator.predicate("strict function exists", () => func !== undefined);
  if (func !== undefined)
    assertShell("strict empty application parameters", func.parameters);
};

const assertShell = (
  name: string,
  schema: ILlmSchema.IParameters | ILlmSchema | undefined,
): void => {
  TestEquality.equals(
    name,
    {
      type: (schema as ILlmSchema.IObject | undefined)?.type,
      properties: (schema as ILlmSchema.IObject | undefined)?.properties,
      required: (schema as ILlmSchema.IObject | undefined)?.required,
      additionalProperties: (schema as ILlmSchema.IObject | undefined)
        ?.additionalProperties,
    },
    {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  );
};
