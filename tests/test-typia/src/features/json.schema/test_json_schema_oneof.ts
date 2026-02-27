import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_oneof = (): void => {
  interface ICircle {
    type: "circle";
    radius: number;
  }
  interface IRectangle {
    type: "rectangle";
    width: number;
    height: number;
  }
  type Shape = ICircle | IRectangle;

  interface IInput {
    shape: Shape;
  }

  const unit = typia.json.schema<IInput>();
  const schema = unit.schema;

  TestValidator.predicate("is reference", () =>
    OpenApiTypeChecker.isReference(schema),
  );

  const components = unit.components;
  const refName = (schema as { $ref: string }).$ref.replace(
    "#/components/schemas/",
    "",
  );
  const actual = components.schemas?.[refName];
  if (actual === undefined) return TestValidator.error("schema not found");
  if (!OpenApiTypeChecker.isObject(actual))
    return TestValidator.error("not object");

  const props = actual.properties;
  if (props === undefined) return TestValidator.error("no properties");

  const shape = props["shape"];
  if (shape === undefined) return TestValidator.error("no shape");

  // Discriminated union uses oneOf
  TestValidator.predicate("shape is oneOf", () =>
    OpenApiTypeChecker.isOneOf(shape),
  );
  if (OpenApiTypeChecker.isOneOf(shape)) {
    TestValidator.equals("oneOf count", shape.oneOf.length, 2);

    // Each variant should be a $ref
    const allRefs = shape.oneOf.every((s) => OpenApiTypeChecker.isReference(s));
    TestValidator.predicate("all variants are $ref", () => allRefs);

    // Check discriminator
    if (shape.discriminator !== undefined) {
      TestValidator.equals(
        "discriminator property",
        shape.discriminator.propertyName,
        "type",
      );
    }
  }
};
