import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_schema_chatgpt_ConstantAtomicTagged = _test_llm_schema({
  model: "chatgpt",
  name: "ConstantAtomicTagged",
})(typia.llm.schema<ConstantAtomicTagged, "chatgpt">());
