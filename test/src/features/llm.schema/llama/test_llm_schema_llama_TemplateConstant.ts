import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_schema_llama_TemplateConstant = _test_llm_schema({
  model: "llama",
  name: "TemplateConstant",
})(typia.llm.schema<TemplateConstant, "llama">({}));
