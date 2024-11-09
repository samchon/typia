import typia from "typia";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagTuple = 
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagTuple",
  })(typia.llm.schema<TypeTagTuple, "3.0">());