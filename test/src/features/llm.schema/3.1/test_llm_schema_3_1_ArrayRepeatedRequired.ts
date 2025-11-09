import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ArrayRepeatedRequired = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ArrayRepeatedRequired",
  })(typia.llm.schema<ArrayRepeatedRequired, "3.1">({}));