import typia from "typia";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_AtomicSimple = 
  _test_llm_schema({
    model: "chatgpt",
    name: "AtomicSimple",
  })(typia.llm.schema<AtomicSimple, "chatgpt">());