import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ArrayRepeatedUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ArrayRepeatedUnion",
  })(typia.llm.schema<ArrayRepeatedUnion, "3.1">({}));