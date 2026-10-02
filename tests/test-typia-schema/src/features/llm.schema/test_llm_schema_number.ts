import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies native numeric schemas retain ordinary number versus int32 integer,
 * inclusive and exclusive 0/100 ranges, and multipleOf 5, with shape guards
 * before tagged assertions.
 *
 * Ordinary/integer, inclusive/exclusive bounds and multiplicity keep different
 * generated inputs. Explicit numeric shape guards prevent changed kinds from
 * skipping the corresponding constraint assertions.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native numeric schemas retain ordinary number versus int32 integer, inclusive and exclusive 0/100 ranges, and multipleOf 5, with shape guards before tagged assertions.
 * @evidence contracts/testing.md#independent-expectations The generic number and locally authored numeric tags independently determine expected kinds and keyword literals.
 * @evidence contracts/testing.md#distinguishing-cases Ordinary/integer, inclusive/exclusive bounds and multiplicity keep different generated inputs. Explicit numeric shape guards prevent changed kinds from skipping the corresponding constraint assertions.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_number is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Ordinary/integer, inclusive/exclusive bounds and multiplicity keep different generated inputs. Explicit numeric shape guards prevent changed kinds from skipping the corresponding constraint assertions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_number = (): void => {
  const schema = typia.llm.schema<number>({});

  TestValidator.predicate("is number type", () =>
    LlmTypeChecker.isNumber(schema),
  );

  // integer type
  const integer = typia.llm.schema<number & tags.Type<"int32">>({});
  TestValidator.predicate("int32 is integer", () =>
    LlmTypeChecker.isInteger(integer),
  );

  // number with range
  const ranged = typia.llm.schema<number & tags.Minimum<0> & tags.Maximum<100>>(
    {},
  );
  TestValidator.predicate("ranged schema has the expected type", () =>
    LlmTypeChecker.isNumber(ranged),
  );
  if (LlmTypeChecker.isNumber(ranged)) {
    TestEquality.equals("minimum", ranged.minimum, 0);
    TestEquality.equals("maximum", ranged.maximum, 100);
  }

  // exclusive range
  const exclusive = typia.llm.schema<
    number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>
  >({});
  TestValidator.predicate("exclusive schema has the expected type", () =>
    LlmTypeChecker.isNumber(exclusive),
  );
  if (LlmTypeChecker.isNumber(exclusive)) {
    TestEquality.equals("exclusiveMinimum", exclusive.exclusiveMinimum, 0);
    TestEquality.equals("exclusiveMaximum", exclusive.exclusiveMaximum, 100);
  }

  // multipleOf
  const multiple = typia.llm.schema<number & tags.MultipleOf<5>>({});
  TestValidator.predicate("multiple schema has the expected type", () =>
    LlmTypeChecker.isNumber(multiple),
  );
  if (LlmTypeChecker.isNumber(multiple)) {
    TestEquality.equals("multipleOf", multiple.multipleOf, 5);
  }
};
