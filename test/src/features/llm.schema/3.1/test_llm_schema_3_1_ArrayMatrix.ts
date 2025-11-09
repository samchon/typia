import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_schema_3_1_ArrayMatrix = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ArrayMatrix",
  })(typia.llm.schema<ArrayMatrix, "3.1">({}));
