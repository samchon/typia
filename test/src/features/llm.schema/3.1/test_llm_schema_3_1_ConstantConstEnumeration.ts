import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_schema_3_1_ConstantConstEnumeration = _test_llm_schema({
  model: "3.1",
  name: "ConstantConstEnumeration",
})(typia.llm.schema<ConstantConstEnumeration, "3.1">({}));
