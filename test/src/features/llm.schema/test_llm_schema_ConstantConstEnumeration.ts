import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_llm_schema_ConstantConstEnumeration = _test_llm_schema(
  "ConstantConstEnumeration",
)(typia.llm.schema<ConstantConstEnumeration>());
