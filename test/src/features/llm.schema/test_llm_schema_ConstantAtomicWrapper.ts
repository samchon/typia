import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_llm_schema_ConstantAtomicWrapper = _test_llm_schema(
  "ConstantAtomicWrapper",
)(typia.llm.schema<ConstantAtomicWrapper>());
