import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TypeTagObjectUnion = 
  _test_llm_schema({
    model: "3.1",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "3.1">());