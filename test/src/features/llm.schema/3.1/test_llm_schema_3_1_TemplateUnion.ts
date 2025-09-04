import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_schema_3_1_TemplateUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TemplateUnion",
  })(typia.llm.schema<TemplateUnion, "3.1">({}));
