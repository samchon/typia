import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_schema_llama_ToJsonUnion = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ToJsonUnion",
  })(typia.llm.schema<ToJsonUnion, "llama">({}));
