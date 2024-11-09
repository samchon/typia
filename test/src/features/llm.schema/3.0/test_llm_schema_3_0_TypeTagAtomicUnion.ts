import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_TypeTagAtomicUnion = 
  _test_llm_schema({
    model: "3.0",
    name: "TypeTagAtomicUnion",
  })(typia.llm.schema<TypeTagAtomicUnion, "3.0">());