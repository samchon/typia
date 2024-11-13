import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_schema_chatgpt_DynamicEnumeration = _test_llm_schema({
  model: "chatgpt",
  name: "DynamicEnumeration",
})(typia.llm.schema<DynamicEnumeration, "chatgpt">());
