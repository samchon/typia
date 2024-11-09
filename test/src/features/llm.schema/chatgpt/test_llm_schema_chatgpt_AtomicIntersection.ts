import typia from "typia";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_AtomicIntersection = 
  _test_llm_schema({
    model: "chatgpt",
    name: "AtomicIntersection",
  })(typia.llm.schema<AtomicIntersection, "chatgpt">());