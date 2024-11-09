import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TemplateConstant = 
  _test_llm_schema({
    model: "chatgpt",
    name: "TemplateConstant",
  })(typia.llm.schema<TemplateConstant, "chatgpt">());