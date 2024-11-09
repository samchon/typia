import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_AtomicClass = 
  _test_llm_schema({
    model: "3.1",
    name: "AtomicClass",
  })(typia.llm.schema<AtomicClass, "3.1">());