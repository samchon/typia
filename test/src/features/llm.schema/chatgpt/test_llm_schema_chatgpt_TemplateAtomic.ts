import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_schema_chatgpt_TemplateAtomic = _test_llm_schema({
  model: "chatgpt",
  name: "TemplateAtomic",
})(typia.llm.schema<TemplateAtomic, "chatgpt">());
