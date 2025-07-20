import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_schema_llama_DynamicTemplate = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "DynamicTemplate",
  })(typia.llm.schema<DynamicTemplate, "llama">({}));
