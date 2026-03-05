import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

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
  TestValidator.equals("additionalProperties", params.additionalProperties, false);

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
    TestValidator.predicate("IAddress in $defs", () =>
      "IAddress" in params.$defs,
    );

    const addressDef = params.$defs["IAddress"];
    if (addressDef && LlmTypeChecker.isObject(addressDef)) {
      TestValidator.predicate("IAddress has street", () =>
        "street" in addressDef.properties,
      );
      TestValidator.predicate("IAddress has city", () =>
        "city" in addressDef.properties,
      );
    }
  }

  // if inline object
  if (LlmTypeChecker.isObject(address!)) {
    TestValidator.predicate("address has street", () =>
      "street" in address.properties,
    );
    TestValidator.predicate("address has city", () =>
      "city" in address.properties,
    );
  }
};
