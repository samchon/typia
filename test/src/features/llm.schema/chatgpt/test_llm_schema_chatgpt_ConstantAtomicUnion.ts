import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_schema_chatgpt_ConstantAtomicUnion = _test_llm_schema({
  model: "chatgpt",
  name: "ConstantAtomicUnion",
})(typia.llm.schema<ConstantAtomicUnion, "chatgpt">({}));
