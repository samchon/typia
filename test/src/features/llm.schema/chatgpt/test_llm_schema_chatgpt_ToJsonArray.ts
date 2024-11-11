import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_llm_schema_chatgpt_ToJsonArray = _test_llm_schema({
  model: "chatgpt",
  name: "ToJsonArray",
})(typia.llm.schema<ToJsonArray, "chatgpt">());
