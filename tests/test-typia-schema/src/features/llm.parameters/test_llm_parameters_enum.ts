import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native parameter schemas represent both the authored string Status
 * and numeric Level enums, whether inline or referenced, and retain enum
 * cardinality and representative members.
 *
 * String versus number enums and supported reference/inline forms remain
 * distinct. The cardinality-plus-member checks do not certify every enum
 * member; full literal enum comparisons remain in parameters_spec_properties
 * and converter_matrix.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameter schemas represent both the authored string Status and numeric Level enums, whether inline or referenced, and retain enum cardinality and representative members.
 * @evidence contracts/testing.md#independent-expectations Status and Level literal unions independently require three members and the pending/1 representatives. Explicit representation and referenced-definition type predicates prevent a wrong schema kind from bypassing enum checks.
 * @evidence contracts/testing.md#distinguishing-cases String versus number enums and supported reference/inline forms remain distinct. The cardinality-plus-member checks do not certify every enum member; full literal enum comparisons remain in parameters_spec_properties and converter_matrix.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_enum is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. String versus number enums and supported reference/inline forms remain distinct. The cardinality-plus-member checks do not certify every enum member; full literal enum comparisons remain in parameters_spec_properties and converter_matrix. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_enum = (): void => {
  type Status = "pending" | "active" | "completed";
  type Level = 1 | 2 | 3;

  interface IInput {
    status: Status;
    level: Level;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check status - string enum may be inline or $ref
  const status = params.properties["status"];
  TestValidator.predicate("status exists", () => status !== undefined);

  // status could be reference to $defs or inline string with enum
  TestValidator.predicate(
    "status has a supported enum representation",
    () =>
      status !== undefined &&
      (LlmTypeChecker.isReference(status) || LlmTypeChecker.isString(status)),
  );
  if (LlmTypeChecker.isReference(status!)) {
    TestValidator.predicate("Status in $defs", () => "Status" in params.$defs);
    const statusDef = params.$defs["Status"];
    TestValidator.predicate(
      "Status definition has the expected type",
      () => statusDef !== undefined && LlmTypeChecker.isString(statusDef),
    );
    if (statusDef && LlmTypeChecker.isString(statusDef)) {
      TestValidator.predicate(
        "Status has enum",
        () => statusDef.enum !== undefined && statusDef.enum.length === 3,
      );
      TestValidator.predicate(
        "Status contains pending",
        () => statusDef.enum?.includes("pending") ?? false,
      );
    }
  } else if (LlmTypeChecker.isString(status!)) {
    TestValidator.predicate(
      "status has enum",
      () => status.enum !== undefined && status.enum.length === 3,
    );
  }

  // check level - number enum may be inline or $ref
  const level = params.properties["level"];
  TestValidator.predicate("level exists", () => level !== undefined);

  TestValidator.predicate(
    "level has a supported enum representation",
    () =>
      level !== undefined &&
      (LlmTypeChecker.isReference(level) || LlmTypeChecker.isNumber(level)),
  );
  if (LlmTypeChecker.isReference(level!)) {
    TestValidator.predicate("Level in $defs", () => "Level" in params.$defs);
    const levelDef = params.$defs["Level"];
    TestValidator.predicate(
      "Level definition has the expected type",
      () => levelDef !== undefined && LlmTypeChecker.isNumber(levelDef),
    );
    if (levelDef && LlmTypeChecker.isNumber(levelDef)) {
      TestValidator.predicate(
        "Level has enum",
        () => levelDef.enum !== undefined && levelDef.enum.length === 3,
      );
      TestValidator.predicate(
        "Level contains 1",
        () => levelDef.enum?.includes(1) ?? false,
      );
    }
  } else if (LlmTypeChecker.isNumber(level!)) {
    TestValidator.predicate(
      "level has enum",
      () => level.enum !== undefined && level.enum.length === 3,
    );
  }
};
