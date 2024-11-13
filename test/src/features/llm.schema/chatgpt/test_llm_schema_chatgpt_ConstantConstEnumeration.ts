import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_schema_chatgpt_ConstantConstEnumeration =
  _test_llm_schema({
    model: "chatgpt",
    name: "ConstantConstEnumeration",
  })(typia.llm.schema<ConstantConstEnumeration, "chatgpt">());
