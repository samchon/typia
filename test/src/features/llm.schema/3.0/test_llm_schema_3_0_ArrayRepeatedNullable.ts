import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayRepeatedNullable = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ArrayRepeatedNullable",
  })(typia.llm.schema<ArrayRepeatedNullable, "3.0">());