import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_llm_application_3_0_AtomicIntersection =
  _test_llm_application({
    model: "3.0",
    name: "AtomicIntersection",
  })(typia.llm.application<AtomicIntersectionApplication, "3.0">());

interface AtomicIntersectionApplication {
  insert(first: AtomicIntersection): Promise<void>;
  reduce(
    first: AtomicIntersection,
    second: AtomicIntersection | null,
  ): Promise<AtomicIntersection>;
  coalesce(
    first: AtomicIntersection | null,
    second: AtomicIntersection | null,
    third?: AtomicIntersection | null,
  ): Promise<AtomicIntersection | null>;
}
