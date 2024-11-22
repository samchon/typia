import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_llm_application_3_0_AtomicSimple = _test_llm_application({
  model: "3.0",
  name: "AtomicSimple",
})(typia.llm.application<AtomicSimpleApplication, "3.0">());

interface AtomicSimpleApplication {
  insert(first: AtomicSimple): Promise<void>;
  reduce(
    first: AtomicSimple,
    second: AtomicSimple | null,
  ): Promise<AtomicSimple>;
  coalesce(
    first: AtomicSimple | null,
    second: AtomicSimple | null,
    third?: AtomicSimple | null,
  ): Promise<AtomicSimple | null>;
}
