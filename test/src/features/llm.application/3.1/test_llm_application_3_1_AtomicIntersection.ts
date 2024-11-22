import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_llm_application_3_1_AtomicIntersection =
  _test_llm_application({
    model: "3.1",
    name: "AtomicIntersection",
  })(typia.llm.application<AtomicIntersectionApplication, "3.1">());

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
