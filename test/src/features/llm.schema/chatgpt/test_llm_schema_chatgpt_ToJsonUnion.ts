import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_schema_chatgpt_ToJsonUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ToJsonUnion",
  })(typia.llm.schema<ToJsonUnion, "chatgpt">({}));
