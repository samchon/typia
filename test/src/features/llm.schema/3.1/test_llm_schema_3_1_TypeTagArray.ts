import typia from "typia";
import { TypeTagArray } from "../../../structures/TypeTagArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagArray = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagArray",
  })(typia.llm.schema<TypeTagArray, "3.1">({}));