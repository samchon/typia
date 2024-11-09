import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_AtomicClass = 
  _test_llm_schema({
    model: "chatgpt",
    name: "AtomicClass",
  })(typia.llm.schema<AtomicClass, "chatgpt">());