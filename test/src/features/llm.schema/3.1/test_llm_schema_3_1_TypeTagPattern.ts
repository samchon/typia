import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagPattern = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagPattern",
  })(typia.llm.schema<TypeTagPattern, "3.1">({}));