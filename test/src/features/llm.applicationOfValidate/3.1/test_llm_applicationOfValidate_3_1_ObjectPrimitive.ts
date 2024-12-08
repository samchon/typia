import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_applicationOfValidate_3_1_ObjectPrimitive =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ObjectPrimitive",
    factory: ObjectPrimitive,
  })(typia.llm.applicationOfValidate<ObjectPrimitiveApplication, "3.1">());

interface ObjectPrimitiveApplication {
  insert(p: { first: ObjectPrimitive }): Promise<void>;
  reduce(p: {
    first: ObjectPrimitive;
    second: ObjectPrimitive | null;
  }): Promise<ObjectPrimitive>;
  coalesce(p: {
    first: ObjectPrimitive | null;
    second: ObjectPrimitive | null;
    third?: ObjectPrimitive | null;
  }): Promise<ObjectPrimitive | null>;
}
