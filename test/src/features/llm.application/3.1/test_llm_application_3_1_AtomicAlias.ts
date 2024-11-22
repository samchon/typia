import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_llm_application_3_1_AtomicAlias = _test_llm_application({
  model: "3.1",
  name: "AtomicAlias",
})(typia.llm.application<AtomicAliasApplication, "3.1">());

interface AtomicAliasApplication {
  insert(first: AtomicAlias): Promise<void>;
  reduce(first: AtomicAlias, second: AtomicAlias | null): Promise<AtomicAlias>;
  coalesce(
    first: AtomicAlias | null,
    second: AtomicAlias | null,
    third?: AtomicAlias | null,
  ): Promise<AtomicAlias | null>;
}
