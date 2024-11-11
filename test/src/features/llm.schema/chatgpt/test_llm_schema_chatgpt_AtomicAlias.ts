import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_llm_schema_chatgpt_AtomicAlias = _test_llm_schema({
  model: "chatgpt",
  name: "AtomicAlias",
})(typia.llm.schema<AtomicAlias, "chatgpt">());
