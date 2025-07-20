import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_schema_chatgpt_ArrayMatrix = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayMatrix",
  })(typia.llm.schema<ArrayMatrix, "chatgpt">({}));
