import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_schema_3_0_TemplateUnion = _test_llm_schema({
  model: "3.0",
  name: "TemplateUnion",
})(typia.llm.schema<TemplateUnion, "3.0">());
