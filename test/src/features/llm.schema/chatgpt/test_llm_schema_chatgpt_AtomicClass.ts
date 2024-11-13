import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_llm_schema_chatgpt_AtomicClass = _test_llm_schema({
  model: "chatgpt",
  name: "AtomicClass",
})(typia.llm.schema<AtomicClass, "chatgpt">());
