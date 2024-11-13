import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_schema_chatgpt_ClassGetter = _test_llm_schema({
  model: "chatgpt",
  name: "ClassGetter",
})(typia.llm.schema<ClassGetter, "chatgpt">());
