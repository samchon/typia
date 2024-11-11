import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_llm_schema_chatgpt_ConstantAtomicSimple = _test_llm_schema({
  model: "chatgpt",
  name: "ConstantAtomicSimple",
})(typia.llm.schema<ConstantAtomicSimple, "chatgpt">());
