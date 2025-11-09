import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ArrayUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "ArrayUnion",
  })(typia.llm.schema<ArrayUnion, "3.1">({}));