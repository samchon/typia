import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_llm_application_3_1_AtomicClass = _test_llm_application({
  model: "3.1",
  name: "AtomicClass",
})(typia.llm.application<AtomicClassApplication, "3.1">());

interface AtomicClassApplication {
  insert(first: AtomicClass): Promise<void>;
  reduce(first: AtomicClass, second: AtomicClass | null): Promise<AtomicClass>;
  coalesce(
    first: AtomicClass | null,
    second: AtomicClass | null,
    third?: AtomicClass | null,
  ): Promise<AtomicClass | null>;
}
