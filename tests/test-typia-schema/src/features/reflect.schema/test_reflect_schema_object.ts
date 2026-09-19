import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

export const test_reflect_schema_object = (): void => {
  interface IMember {
    id: number;
    name: string;
    email?: string;
  }

  const unit = typia.reflect.schema<IMember>();

  // schema has objects reference
  TestEquality.equals("objects length", unit.schema.objects.length, 1);
  TestEquality.equals("object name", unit.schema.objects[0]?.name, "IMember");

  // components has object definition
  TestEquality.equals(
    "components objects length",
    unit.components.objects.length,
    1,
  );

  const obj = unit.components.objects[0];
  if (obj === undefined) return;

  TestEquality.equals("object name in components", obj.name, "IMember");
  TestEquality.equals("properties count", obj.properties.length, 3);

  // check property names
  const propNames = obj.properties.map((p) => {
    const key = p.key;
    if (key.constants.length > 0 && key.constants[0]?.type === "string") {
      return key.constants[0].values[0]?.value;
    }
    return undefined;
  });

  TestValidator.predicate("has id property", () => propNames.includes("id"));
  TestValidator.predicate("has name property", () =>
    propNames.includes("name"),
  );
  TestValidator.predicate("has email property", () =>
    propNames.includes("email"),
  );

  // check optional property
  const emailProp = obj.properties.find((p) => {
    const key = p.key;
    if (key.constants.length > 0 && key.constants[0]?.type === "string") {
      return key.constants[0].values[0]?.value === "email";
    }
    return false;
  });

  TestValidator.predicate(
    "email is optional",
    () => emailProp?.value.optional === true,
  );
};
