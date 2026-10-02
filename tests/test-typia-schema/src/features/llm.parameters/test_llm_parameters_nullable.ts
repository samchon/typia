import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native parameters keep the plain required string separate from
 * nullable string and number anyOf schemas, retaining each scalar branch and a
 * null branch.
 *
 * Nonnullable versus nullable and string versus numeric leaves prevent
 * collapsing nullability or scalar kind. Existence/type predicates precede
 * member checks, so wrong union shape cannot pass by skipping them.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters keep the plain required string separate from nullable string and number anyOf schemas, retaining each scalar branch and a null branch.
 * @evidence contracts/testing.md#independent-expectations The authored string, string|null and number|null field types independently determine these branch expectations.
 * @evidence contracts/testing.md#distinguishing-cases Nonnullable versus nullable and string versus numeric leaves prevent collapsing nullability or scalar kind. Existence/type predicates precede member checks, so wrong union shape cannot pass by skipping them.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_nullable is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Nonnullable versus nullable and string versus numeric leaves prevent collapsing nullability or scalar kind. Existence/type predicates precede member checks, so wrong union shape cannot pass by skipping them. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_nullable = (): void => {
  interface IInput {
    required: string;
    nullableString: string | null;
    nullableNumber: number | null;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check required is just string
  const required = params.properties["required"];
  TestValidator.predicate("required is string", () =>
    LlmTypeChecker.isString(required!),
  );

  // check nullableString - should be anyOf with string and null
  const nullableString = params.properties["nullableString"];
  TestValidator.predicate(
    "nullableString exists",
    () => nullableString !== undefined,
  );
  TestValidator.predicate("nullableString is anyOf", () =>
    LlmTypeChecker.isAnyOf(nullableString!),
  );

  if (LlmTypeChecker.isAnyOf(nullableString!)) {
    TestValidator.predicate("nullableString has string", () =>
      nullableString.anyOf.some((s) => LlmTypeChecker.isString(s)),
    );
    TestValidator.predicate("nullableString has null", () =>
      nullableString.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }

  // check nullableNumber - should be anyOf with number and null
  const nullableNumber = params.properties["nullableNumber"];
  TestValidator.predicate("nullableNumber is anyOf", () =>
    LlmTypeChecker.isAnyOf(nullableNumber!),
  );

  if (LlmTypeChecker.isAnyOf(nullableNumber!)) {
    TestValidator.predicate("nullableNumber has number", () =>
      nullableNumber.anyOf.some((s) => LlmTypeChecker.isNumber(s)),
    );
    TestValidator.predicate("nullableNumber has null", () =>
      nullableNumber.anyOf.some((s) => LlmTypeChecker.isNull(s)),
    );
  }
};
