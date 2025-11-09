import typia from "typia";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ObjectPrimitive = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectPrimitive",
    factory: ObjectPrimitive
  })(
    typia.llm.application<ObjectPrimitiveApplication, "chatgpt">(),
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