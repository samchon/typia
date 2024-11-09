import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagFormat = 
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagFormat",
  })(typia.llm.schema<TypeTagFormat, "3.0">());