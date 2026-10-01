import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm parameters object against the native typia.llm.parameters
 * output.
 *
 * The case builds its input in this file and asserts is object,
 * additionalProperties, name is string, address exists, address is ref or
 * object, IAddress in $defs.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (is object; additionalProperties; name is string; address exists; address is ref or object; IAddress in $defs).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is object; additionalProperties; name is string; address exists; address is ref or object; IAddress in $defs) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
