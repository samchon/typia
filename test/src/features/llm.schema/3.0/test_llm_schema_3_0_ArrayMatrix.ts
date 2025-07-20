import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_llm_schema_3_0_ArrayMatrix = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ArrayMatrix",
  })(typia.llm.schema<ArrayMatrix, "3.0">());
