import typia from "typia";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ObjectPrimitive = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectPrimitive",
    factory: ObjectPrimitive
  })(
    typia.llm.application<ObjectPrimitiveApplication, "gemini", { equals: true }>(),
  );

interface ObjectPrimitiveApplication {
  insert(p: { first: ObjectPrimitive }): Promise<void>;
  reduce(p: { first: ObjectPrimitive, second: ObjectPrimitive | null }): Promise<ObjectPrimitive>;
  coalesce(p: {
    first: ObjectPrimitive | null,
    second: ObjectPrimitive | null,
    third?: ObjectPrimitive | null,
  }): Promise<ObjectPrimitive | null>;
}