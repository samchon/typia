import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagObjectUnion = 
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "3.0">());