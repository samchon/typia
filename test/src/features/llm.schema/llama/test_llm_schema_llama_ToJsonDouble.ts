import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_schema_llama_ToJsonDouble = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ToJsonDouble",
  })(typia.llm.schema<ToJsonDouble, "llama">({}));
