import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_schema_chatgpt_TemplateConstant = _test_llm_schema({
  model: "chatgpt",
  name: "TemplateConstant",
})(typia.llm.schema<TemplateConstant, "chatgpt">());
