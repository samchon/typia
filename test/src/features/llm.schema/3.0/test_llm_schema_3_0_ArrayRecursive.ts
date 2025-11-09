import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayRecursive = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ArrayRecursive",
  })(typia.llm.schema<ArrayRecursive, "3.0">());