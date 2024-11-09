import typia from "typia";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_AtomicAlias = 
  _test_llm_schema({
    model: "3.1",
    name: "AtomicAlias",
  })(typia.llm.schema<AtomicAlias, "3.1">());