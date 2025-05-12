import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_llm_schema_chatgpt_ObjectUndefined = _test_llm_schema({
  model: "chatgpt",
  name: "ObjectUndefined",
})(typia.llm.schema<ObjectUndefined, "chatgpt">({}));
