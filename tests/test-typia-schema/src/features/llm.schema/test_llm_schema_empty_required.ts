import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies LLM schemas keep empty object shell fields in every mode.
 *
 * Function-calling schemas need to state explicitly that an object has no named
 * parameters. Both default and strict LLM schemas therefore keep `properties:
 * {}` and `required: []`, while strict mode additionally forces
 * `additionalProperties: false`.
 *
 * 1. Generate default and strict LLM schemas for an empty object interface.
 * 2. Resolve each `$defs` reference.
 * 3. Assert both object shells keep explicit empty fields.
 *
 * @evidence contracts/testing.md#behavioral-verification Default and strict empty-interface schemas retain explicit object/empty properties/empty required fields after local reference resolution; strict mode additionally requires false additionalProperties.
 * @evidence contracts/testing.md#independent-expectations The expected shell projection is a handwritten literal for the empty source type and supported strict-object policy. Resolving the emitted local reference does not generate the expected shell.
 * @evidence contracts/testing.md#distinguishing-cases The zero-property boundary is exercised in both modes. Empty versus undefined fields remain distinguishable; this case does not assert default additionalProperties beyond the projected shell.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_empty_required is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. The zero-property boundary is exercised in both modes. Empty versus undefined fields remain distinguishable; this case does not assert default additionalProperties beyond the projected shell. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_empty_required = (): void => {
  interface IEmpty {}

  const nonStrictDefs: Record<string, ILlmSchema> = {};
  const nonStrict = resolve(
    typia.llm.schema<IEmpty>(nonStrictDefs),
    nonStrictDefs,
  );

  assertShell("default empty object", nonStrict);

  const strictDefs: Record<string, ILlmSchema> = {};
  const strict = resolve(
    typia.llm.schema<IEmpty, { strict: true }>(strictDefs),
    strictDefs,
  );

  assertShell("strict empty object", strict, false);
};

const resolve = (
  schema: ILlmSchema,
  $defs: Record<string, ILlmSchema>,
): ILlmSchema => {
  if ("$ref" in schema) return $defs[schema.$ref.split("/").at(-1)!]!;
  return schema;
};

const assertShell = (
  name: string,
  schema: ILlmSchema,
  additionalProperties?: false,
): void => {
  TestEquality.equals(
    name,
    clean({
      type: (schema as ILlmSchema.IObject).type,
      properties: (schema as ILlmSchema.IObject).properties,
      required: (schema as ILlmSchema.IObject).required,
    }),
    {
      type: "object",
      properties: {},
      required: [],
    },
  );
  if (additionalProperties !== undefined)
    TestEquality.equals(
      `${name} additionalProperties`,
      (schema as ILlmSchema.IObject).additionalProperties,
      additionalProperties,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
