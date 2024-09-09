import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_llm_schema_TemplateUnion = _test_llm_schema("TemplateUnion")(
  typia.llm.schema<TemplateUnion>(),
);
