import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_llm_schema_ConstantAtomicTagged = _test_llm_schema(
  "ConstantAtomicTagged",
)(typia.llm.schema<ConstantAtomicTagged>());
