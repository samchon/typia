import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_llm_schema_chatgpt_ToJsonAtomicSimple = _test_llm_schema({
  model: "chatgpt",
  name: "ToJsonAtomicSimple",
})(typia.llm.schema<ToJsonAtomicSimple, "chatgpt">());
