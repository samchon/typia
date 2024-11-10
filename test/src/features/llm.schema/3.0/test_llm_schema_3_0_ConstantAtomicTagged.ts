import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_schema_3_0_ConstantAtomicTagged = _test_llm_schema({
  model: "3.0",
  name: "ConstantAtomicTagged",
})(typia.llm.schema<ConstantAtomicTagged, "3.0">());
