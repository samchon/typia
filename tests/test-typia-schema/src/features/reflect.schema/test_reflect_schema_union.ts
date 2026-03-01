import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_reflect_schema_union = (): void => {
  // primitive union
  const primitiveUnion = typia.reflect.schema<string | number>();
  TestValidator.equals("atomics length", primitiveUnion.schema.atomics.length, 2);

  const types = primitiveUnion.schema.atomics.map((a) => a.type);
  TestValidator.predicate("has string", () => types.includes("string"));
  TestValidator.predicate("has number", () => types.includes("number"));

  // object union
  interface ICat {
    type: "cat";
    meow: string;
  }
  interface IDog {
    type: "dog";
    bark: string;
  }

  const objectUnion = typia.reflect.schema<ICat | IDog>();
  TestValidator.equals("objects length", objectUnion.schema.objects.length, 2);

  const objectNames = objectUnion.schema.objects.map((o) => o.name);
  TestValidator.predicate("has ICat", () => objectNames.includes("ICat"));
  TestValidator.predicate("has IDog", () => objectNames.includes("IDog"));
};
