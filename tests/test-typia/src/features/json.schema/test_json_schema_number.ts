import { OpenApiTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schema_number = (): void => {
  interface IInput {
    basic: number;
    int32: number & tags.Type<"int32">;
    range: number & tags.Minimum<0> & tags.Maximum<100>;
    multipleOf: number & tags.MultipleOf<5>;
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

  const basic = props["basic"];
  const int32 = props["int32"];
  const range = props["range"];
  const multipleOf = props["multipleOf"];

  if (basic === undefined) return TestValidator.error("no basic");
  if (int32 === undefined) return TestValidator.error("no int32");
  if (range === undefined) return TestValidator.error("no range");
  if (multipleOf === undefined) return TestValidator.error("no multipleOf");

  TestValidator.predicate("basic is number", () =>
    OpenApiTypeChecker.isNumber(basic),
  );
  TestValidator.predicate("int32 is integer", () =>
    OpenApiTypeChecker.isInteger(int32),
  );
  TestValidator.predicate("range is number", () =>
    OpenApiTypeChecker.isNumber(range),
  );
  if (OpenApiTypeChecker.isNumber(range)) {
    TestValidator.equals("minimum", range.minimum, 0);
    TestValidator.equals("maximum", range.maximum, 100);
  }

  TestValidator.predicate("multipleOf is number", () =>
    OpenApiTypeChecker.isNumber(multipleOf),
  );
  if (OpenApiTypeChecker.isNumber(multipleOf)) {
    TestValidator.equals("multipleOf value", multipleOf.multipleOf, 5);
  }
};
