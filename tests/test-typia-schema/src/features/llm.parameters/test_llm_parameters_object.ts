import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native parameters retain the name string and nested address
 * object/ref, requiring any referenced IAddress to be an object with
 * street/city fields.
 *
 * Top-level scalar and nested object assembly, reference versus inline
 * representation and both nested fields retain distinct assertions. A wrongly
 * typed referenced definition can no longer skip all address field checks.
 *
 * 1. Execute the native calls for the declarations and inputs in this file.
 * 2. Compare the observed schema fragments or runtime results with the stated
 *    expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Native parameters retain the name string and nested address object/ref, requiring any referenced IAddress to be an object with street/city fields.
 * @evidence contracts/testing.md#independent-expectations IInput/IAddress authored fields independently determine the names and permitted object/reference representation; the referenced-definition shape is required before its fields are inspected.
 * @evidence contracts/testing.md#distinguishing-cases Top-level scalar and nested object assembly, reference versus inline representation and both nested fields retain distinct assertions. A wrongly typed referenced definition can no longer skip all address field checks.
 * @evidence contracts/testing.md#execution-ownership test_llm_parameters_object is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.parameters through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native type analyzer/emitter connects the declared TypeScript type and options to the schema or bound runtime operation observed here. A utility unit with a handwritten schema cannot detect a missing rewrite, wrong emitted type shape or incorrect binding at this public producer.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.parameters call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Top-level scalar and nested object assembly, reference versus inline representation and both nested fields retain distinct assertions. A wrongly typed referenced definition can no longer skip all address field checks. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_parameters_object = (): void => {
  interface IAddress {
    street: string;
    city: string;
  }
  interface IInput {
    name: string;
    address: IAddress;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check name
  const name = params.properties["name"];
  TestValidator.predicate("name is string", () =>
    LlmTypeChecker.isString(name!),
  );

  // check address - nested object uses $ref
  const address = params.properties["address"];
  TestValidator.predicate("address exists", () => address !== undefined);

  // address should be reference or object
  const isRefOrObject =
    LlmTypeChecker.isReference(address!) || LlmTypeChecker.isObject(address!);
  TestValidator.predicate("address is ref or object", () => isRefOrObject);

  // if reference, check $defs
  if (LlmTypeChecker.isReference(address!)) {
    TestValidator.predicate(
      "IAddress in $defs",
      () => "IAddress" in params.$defs,
    );

    const addressDef = params.$defs["IAddress"];
    TestValidator.predicate(
      "addressDef definition has the expected type",
      () => addressDef !== undefined && LlmTypeChecker.isObject(addressDef),
    );
    if (addressDef && LlmTypeChecker.isObject(addressDef)) {
      TestValidator.predicate(
        "IAddress has street",
        () => "street" in addressDef.properties,
      );
      TestValidator.predicate(
        "IAddress has city",
        () => "city" in addressDef.properties,
      );
    }
  }

  // if inline object
  if (LlmTypeChecker.isObject(address!)) {
    TestValidator.predicate(
      "address has street",
      () => "street" in address.properties,
    );
    TestValidator.predicate(
      "address has city",
      () => "city" in address.properties,
    );
  }
};
