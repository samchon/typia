import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_llm_schema_3_0_AtomicAlias = _test_llm_schema({
  model: "3.0",
  name: "AtomicAlias",
})(typia.llm.schema<AtomicAlias, "3.0">());
