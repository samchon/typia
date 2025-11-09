import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagLength = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagLength",
  })(typia.llm.schema<TypeTagLength, "3.1">({}));