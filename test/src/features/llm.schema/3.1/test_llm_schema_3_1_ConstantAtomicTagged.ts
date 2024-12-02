import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_schema_3_1_ConstantAtomicTagged = _test_llm_schema({
  model: "3.1",
  name: "ConstantAtomicTagged",
})(typia.llm.schema<ConstantAtomicTagged, "3.1">({}));
