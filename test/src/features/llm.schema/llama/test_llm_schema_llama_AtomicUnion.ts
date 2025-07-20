import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_schema_llama_AtomicUnion = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "AtomicUnion",
  })(typia.llm.schema<AtomicUnion, "llama">({}));
