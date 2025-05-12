import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_schema_chatgpt_ConstantEnumeration = _test_llm_schema({
  model: "chatgpt",
  name: "ConstantEnumeration",
})(typia.llm.schema<ConstantEnumeration, "chatgpt">({}));
