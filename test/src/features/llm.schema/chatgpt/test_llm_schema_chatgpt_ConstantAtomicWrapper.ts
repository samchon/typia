import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_llm_schema_chatgpt_ConstantAtomicWrapper = _test_llm_schema({
  model: "chatgpt",
  name: "ConstantAtomicWrapper",
})(typia.llm.schema<ConstantAtomicWrapper, "chatgpt">());
