import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_application_3_0_AtomicUnion = _test_llm_application({
  model: "3.0",
  name: "AtomicUnion",
})(typia.llm.application<AtomicUnionApplication, "3.0">());

interface AtomicUnionApplication {
  insert(first: AtomicUnion): Promise<void>;
  reduce(first: AtomicUnion, second: AtomicUnion | null): Promise<AtomicUnion>;
  coalesce(
    first: AtomicUnion | null,
    second: AtomicUnion | null,
    third?: AtomicUnion | null,
  ): Promise<AtomicUnion | null>;
}
