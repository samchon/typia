import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_schema_chatgpt_DynamicSimple = _test_llm_schema({
  model: "chatgpt",
  name: "DynamicSimple",
})(typia.llm.schema<DynamicSimple, "chatgpt">());
