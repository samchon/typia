import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagRange = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagRange",
  })(typia.llm.schema<TypeTagRange, "3.1">({}));