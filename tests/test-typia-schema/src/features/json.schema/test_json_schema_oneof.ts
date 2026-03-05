import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

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
    TestValidator.predicate("Animal exists in components", () =>
      animalSchema !== undefined,
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

    TestValidator.equals("oneOf has 2 types", oneOf.oneOf.length, 2);

    // check discriminator
    TestValidator.predicate("has discriminator", () =>
      oneOf.discriminator !== undefined,
    );
    if (oneOf.discriminator) {
      TestValidator.equals(
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
  TestValidator.predicate("ICat exists in components", () =>
    unit.components.schemas !== undefined && "ICat" in unit.components.schemas,
  );
  TestValidator.predicate("IDog exists in components", () =>
    unit.components.schemas !== undefined && "IDog" in unit.components.schemas,
  );
};
