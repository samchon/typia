import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagMatrix = 
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagMatrix",
  })(typia.llm.schema<TypeTagMatrix, "3.1">());