import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_llm_schema_chatgpt_AtomicSimple = _test_llm_schema({
  model: "chatgpt",
  name: "AtomicSimple",
})(typia.llm.schema<AtomicSimple, "chatgpt">());
