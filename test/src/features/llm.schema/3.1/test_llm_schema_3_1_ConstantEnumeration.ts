import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_schema_3_1_ConstantEnumeration = _test_llm_schema({
  model: "3.1",
  name: "ConstantEnumeration",
})(typia.llm.schema<ConstantEnumeration, "3.1">({}));
