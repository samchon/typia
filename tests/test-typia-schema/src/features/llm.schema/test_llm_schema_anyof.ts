import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native schema generation retains the named Animal reference, its
 * two-branch union and ICat/IDog definitions, requiring the cat definition to
 * be an object before checking its fields.
 *
 * Named-union reference, branch cardinality, permitted reference/object branch
 * forms and cat field presence remain distinct. Wrong cat definition shape now
 * fails explicitly instead of skipping field assertions.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native schema generation retains the named Animal reference, its two-branch union and ICat/IDog definitions, requiring the cat definition to be an object before checking its fields.
 * @evidence contracts/testing.md#independent-expectations The local cat/dog declarations independently require both variants and the cat type/name/meow fields. LlmTypeChecker predicates inspect emitted values rather than supply expected values.
 * @evidence contracts/testing.md#distinguishing-cases Named-union reference, branch cardinality, permitted reference/object branch forms and cat field presence remain distinct. Wrong cat definition shape now fails explicitly instead of skipping field assertions.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_anyof is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Named-union reference, branch cardinality, permitted reference/object branch forms and cat field presence remain distinct. Wrong cat definition shape now fails explicitly instead of skipping field assertions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_anyof = (): void => {
  // discriminated union with type property
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type Animal = ICat | IDog;

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Animal>($defs);

  // named union type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  const animalSchema = $defs["Animal"];
  TestValidator.predicate(
    "Animal exists in $defs",
    () => animalSchema !== undefined,
  );

  if (animalSchema) {
    // LLM schema uses anyOf for unions
    TestValidator.predicate("is anyOf type", () =>
      LlmTypeChecker.isAnyOf(animalSchema),
    );

    if (LlmTypeChecker.isAnyOf(animalSchema)) {
      TestEquality.equals("anyOf has 2 types", animalSchema.anyOf.length, 2);

      // each element should be reference or object
      TestValidator.predicate("all elements are ref or object", () =>
        animalSchema.anyOf.every(
          (s) => LlmTypeChecker.isReference(s) || LlmTypeChecker.isObject(s),
        ),
      );
    }
  }

  // check ICat and IDog in $defs
  TestValidator.predicate("ICat exists in $defs", () => "ICat" in $defs);
  TestValidator.predicate("IDog exists in $defs", () => "IDog" in $defs);

  // verify ICat structure
  const catSchema = $defs["ICat"];
  TestValidator.predicate(
    "catSchema definition has the expected type",
    () => catSchema !== undefined && LlmTypeChecker.isObject(catSchema),
  );
  if (catSchema && LlmTypeChecker.isObject(catSchema)) {
    TestValidator.predicate(
      "ICat has type property",
      () => "type" in catSchema.properties,
    );
    TestValidator.predicate(
      "ICat has name property",
      () => "name" in catSchema.properties,
    );
    TestValidator.predicate(
      "ICat has meow property",
      () => "meow" in catSchema.properties,
    );
  }
};
