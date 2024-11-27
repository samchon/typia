import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_application_claude_ObjectPrimitive =
  _test_llm_application({
    model: "claude",
    name: "ObjectPrimitive",
  })(typia.llm.application<ObjectPrimitiveApplication, "claude">());

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
