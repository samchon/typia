import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_llm_schema_ConstantAtomicSimple = _test_llm_schema(
  "ConstantAtomicSimple",
)(typia.llm.schema<ConstantAtomicSimple>());
