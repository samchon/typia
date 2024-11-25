import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_application_llama_AtomicUnion = _test_llm_application({
  model: "llama",
  name: "AtomicUnion",
})(typia.llm.application<AtomicUnionApplication, "llama">());

interface AtomicUnionApplication {
  insert(first: AtomicUnion): Promise<void>;
  reduce(first: AtomicUnion, second: AtomicUnion | null): Promise<AtomicUnion>;
  coalesce(
    first: AtomicUnion | null,
    second: AtomicUnion | null,
    third?: AtomicUnion | null,
  ): Promise<AtomicUnion | null>;
}
