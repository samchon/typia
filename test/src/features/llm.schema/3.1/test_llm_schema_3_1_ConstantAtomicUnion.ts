import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ConstantAtomicUnion = 
  _test_llm_schema({
    model: "3.1",
    name: "ConstantAtomicUnion",
  })(typia.llm.schema<ConstantAtomicUnion, "3.1">());