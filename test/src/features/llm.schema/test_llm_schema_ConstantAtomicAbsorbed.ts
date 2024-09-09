import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_llm_schema_ConstantAtomicAbsorbed = _test_llm_schema(
  "ConstantAtomicAbsorbed",
)(typia.llm.schema<ConstantAtomicAbsorbed>());
