import typia from "typia";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ConstantAtomicTagged = 
  _test_llm_schema({
    model: "3.1",
    name: "ConstantAtomicTagged",
  })(typia.llm.schema<ConstantAtomicTagged, "3.1">());