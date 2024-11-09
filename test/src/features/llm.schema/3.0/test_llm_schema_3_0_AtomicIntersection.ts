import typia from "typia";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_AtomicIntersection = 
  _test_llm_schema({
    model: "3.0",
    name: "AtomicIntersection",
  })(typia.llm.schema<AtomicIntersection, "3.0">());