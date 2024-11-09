import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagCustom = 
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagCustom",
  })(typia.llm.schema<TypeTagCustom, "3.1">());