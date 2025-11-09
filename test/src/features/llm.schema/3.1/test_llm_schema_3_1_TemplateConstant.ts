import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_schema_3_1_TemplateConstant = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TemplateConstant",
  })(typia.llm.schema<TemplateConstant, "3.1">({}));
