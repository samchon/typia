import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_llm_schema_3_1_ConstantAtomicAbsorbed = _test_llm_schema({
  model: "3.1",
  name: "ConstantAtomicAbsorbed",
})(typia.llm.schema<ConstantAtomicAbsorbed, "3.1">());
