import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_application_3_1_ObjectUndefined = _test_llm_application({
  model: "3.1",
  name: "ObjectUndefined",
  factory: ObjectUndefined,
})(typia.llm.application<ObjectUndefinedApplication, "3.1">());

interface ObjectUndefinedApplication {
  insert(p: { first: ObjectUndefined }): Promise<void>;
  reduce(p: {
    first: ObjectUndefined;
    second: ObjectUndefined | null;
  }): Promise<ObjectUndefined>;
  coalesce(p: {
    first: ObjectUndefined | null;
    second: ObjectUndefined | null;
    third?: ObjectUndefined | null;
  }): Promise<ObjectUndefined | null>;
}
