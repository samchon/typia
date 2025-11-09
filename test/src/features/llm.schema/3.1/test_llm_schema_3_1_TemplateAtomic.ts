import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_schema_3_1_TemplateAtomic = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TemplateAtomic",
  })(typia.llm.schema<TemplateAtomic, "3.1">({}));
