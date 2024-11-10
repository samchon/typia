import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_llm_schema_3_1_ConstantAtomicSimple = _test_llm_schema({
  model: "3.1",
  name: "ConstantAtomicSimple",
})(typia.llm.schema<ConstantAtomicSimple, "3.1">());
