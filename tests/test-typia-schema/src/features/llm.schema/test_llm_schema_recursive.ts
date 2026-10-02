import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies a native ICategory schema retains its reference, an object
 * definition with name/children and an array children property whose items
 * refer back to a definition.
 *
 * Top reference, object-kind, child-array-kind and item-reference checks
 * prevent dropping recursion behind a conditional skip. Exact recursive
 * reference identity is pinned in schema_spec_reference.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification A native ICategory schema retains its reference, an object definition with name/children and an array children property whose items refer back to a definition.
 * @evidence contracts/testing.md#independent-expectations The recursive ICategory source independently requires object, name, children array and referenced items. Public checker predicates inspect those shapes; no recursive output is used to manufacture an expectation.
 * @evidence contracts/testing.md#distinguishing-cases Top reference, object-kind, child-array-kind and item-reference checks prevent dropping recursion behind a conditional skip. Exact recursive reference identity is pinned in schema_spec_reference.
 * @evidence contracts/testing.md#execution-ownership test_llm_schema_recursive is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.schema through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.schema call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Top reference, object-kind, child-array-kind and item-reference checks prevent dropping recursion behind a conditional skip. Exact recursive reference identity is pinned in schema_spec_reference. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_schema_recursive = (): void => {
  interface ICategory {
    name: string;
    children: ICategory[];
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<ICategory>($defs);

  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );
  TestValidator.predicate("$defs has ICategory", () => "ICategory" in $defs);

  const category = $defs["ICategory"];
  TestValidator.predicate(
    "category definition has the expected type",
    () => category !== undefined && LlmTypeChecker.isObject(category),
  );
  if (category && LlmTypeChecker.isObject(category)) {
    TestValidator.predicate("has name", () => "name" in category.properties);
    TestValidator.predicate(
      "has children",
      () => "children" in category.properties,
    );

    const children = category.properties["children"];
    TestValidator.predicate(
      "children is an array",
      () => children !== undefined && LlmTypeChecker.isArray(children),
    );
    if (children && LlmTypeChecker.isArray(children)) {
      TestValidator.predicate("children items is ref", () =>
        LlmTypeChecker.isReference(children.items),
      );
    }
  }
};
