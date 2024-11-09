import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ConstantAtomicWrapper = 
  _test_llm_schema({
    model: "3.0",
    name: "ConstantAtomicWrapper",
  })(typia.llm.schema<ConstantAtomicWrapper, "3.0">());