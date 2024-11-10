import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_schema_chatgpt_AtomicUnion = _test_llm_schema({
  model: "chatgpt",
  name: "AtomicUnion",
})(typia.llm.schema<AtomicUnion, "chatgpt">());
