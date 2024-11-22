import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_application_chatgpt_ObjectDate = _test_llm_application({
  model: "chatgpt",
  name: "ObjectDate",
})(typia.llm.application<ObjectDateApplication, "chatgpt">());

interface ObjectDateApplication {
  insert(first: ObjectDate): Promise<void>;
  reduce(first: ObjectDate, second: ObjectDate | null): Promise<ObjectDate>;
  coalesce(
    first: ObjectDate | null,
    second: ObjectDate | null,
    third?: ObjectDate | null,
  ): Promise<ObjectDate | null>;
}
