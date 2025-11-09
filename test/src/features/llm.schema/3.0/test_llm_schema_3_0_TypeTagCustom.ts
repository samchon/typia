import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagCustom = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagCustom",
  })(typia.llm.schema<TypeTagCustom, "3.0">());