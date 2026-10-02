import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies a native named IMember schema retains its reference, an object
 * definition, required numeric id/name and optional email field.
 *
 * Named reference and target object content are separately inspected. The new
 * object-kind guard prevents a wrong definition from skipping required,
 * optional and id-type assertions.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification A native named IMember schema retains its reference, an object definition, required numeric id/name and optional email field.
 * @evidence contracts/testing.md#independent-expectations IMember required and optional declarations independently determine the expected property presence, id type and required/optional membership; the definition shape is asserted before field checks.
 * @evidence contracts/testing.md#distinguishing-cases Named reference and target object content are separately inspected. The new object-kind guard prevents a wrong definition from skipping required, optional and id-type assertions.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Named reference and target object content are separately inspected. The new object-kind guard prevents a wrong definition from skipping required, optional and id-type assertions. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IMember>($defs);

  // named type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  // actual schema in $defs
  TestValidator.predicate("$defs has IMember", () => "IMember" in $defs);

  const member = $defs["IMember"];
  TestValidator.predicate(
    "member definition has the expected type",
    () => member !== undefined && LlmTypeChecker.isObject(member),
  );
  if (member && LlmTypeChecker.isObject(member)) {
    TestValidator.predicate("has id property", () => "id" in member.properties);
    TestValidator.predicate(
      "has name property",
      () => "name" in member.properties,
    );
    TestValidator.predicate(
      "has email property",
      () => "email" in member.properties,
    );

    TestValidator.predicate(
      "id is required",
      () => member.required?.includes("id") ?? false,
    );
    TestValidator.predicate(
      "email is optional",
      () => !(member.required?.includes("email") ?? false),
    );

    TestValidator.predicate("id is number", () =>
      LlmTypeChecker.isNumber(member.properties["id"]!),
    );
  }
};
