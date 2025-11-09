import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagDefault = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagDefault",
  })(typia.llm.schema<TypeTagDefault, "3.0">());