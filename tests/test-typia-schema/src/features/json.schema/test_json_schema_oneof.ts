import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies json schema oneof against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts Animal exists in
 * components, is oneOf type, oneOf has 2 types, has discriminator,
 * discriminator property is type, all elements are ref or object.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 8 assertions (Animal exists in components; is oneOf type; oneOf has 2 types; has discriminator; discriminator property is type; all elements are ref or object).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (Animal exists in components; is oneOf type; oneOf has 2 types; has discriminator; discriminator property is type; all elements are ref or object) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_oneof is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_oneof = (): void => {
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

  const unit = typia.json.schema<Animal>();
  const schema = unit.schema;

  // named union type returns $ref
  let actualSchema: OpenApi.IJsonSchema;
  if (OpenApiTypeChecker.isReference(schema)) {
    const animalSchema = unit.components.schemas?.["Animal"];
    TestValidator.predicate(
      "Animal exists in components",
      () => animalSchema !== undefined,
    );
    actualSchema = animalSchema!;
  } else {
    actualSchema = schema;
  }

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(actualSchema),
  );

  if (OpenApiTypeChecker.isOneOf(actualSchema)) {
    const oneOf = actualSchema as OpenApi.IJsonSchema.IOneOf;

    TestEquality.equals("oneOf has 2 types", oneOf.oneOf.length, 2);

    // check discriminator
    TestValidator.predicate(
      "has discriminator",
      () => oneOf.discriminator !== undefined,
    );
    if (oneOf.discriminator) {
      TestEquality.equals(
        "discriminator property is type",
        oneOf.discriminator.propertyName,
        "type",
      );
    }

    // each element should be reference or object
    TestValidator.predicate("all elements are ref or object", () =>
      oneOf.oneOf.every(
        (s) =>
          OpenApiTypeChecker.isReference(s) || OpenApiTypeChecker.isObject(s),
      ),
    );
  }

  // check ICat and IDog in components
  TestValidator.predicate(
    "ICat exists in components",
    () =>
      unit.components.schemas !== undefined &&
      "ICat" in unit.components.schemas,
  );
  TestValidator.predicate(
    "IDog exists in components",
    () =>
      unit.components.schemas !== undefined &&
      "IDog" in unit.components.schemas,
  );
};
