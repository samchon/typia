import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_application_chatgpt_ObjectSimple = _test_llm_application({
  model: "chatgpt",
  name: "ObjectSimple",
})(typia.llm.application<ObjectSimpleApplication, "chatgpt">());

interface ObjectSimpleApplication {
  insert(first: ObjectSimple): Promise<void>;
  reduce(
    first: ObjectSimple,
    second: ObjectSimple | null,
  ): Promise<ObjectSimple>;
  coalesce(
    first: ObjectSimple | null,
    second: ObjectSimple | null,
    third?: ObjectSimple | null,
  ): Promise<ObjectSimple | null>;
}
