import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_schema_chatgpt_DynamicTemplate = _test_llm_schema({
  model: "chatgpt",
  name: "DynamicTemplate",
})(typia.llm.schema<DynamicTemplate, "chatgpt">({}));
