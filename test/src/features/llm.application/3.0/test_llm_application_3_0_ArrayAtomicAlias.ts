import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_llm_application_3_0_ArrayAtomicAlias = _test_llm_application({
  model: "3.0",
  name: "ArrayAtomicAlias",
})(typia.llm.application<ArrayAtomicAliasApplication, "3.0">());

interface ArrayAtomicAliasApplication {
  insert(first: ArrayAtomicAlias): Promise<void>;
  reduce(
    first: ArrayAtomicAlias,
    second: ArrayAtomicAlias | null,
  ): Promise<ArrayAtomicAlias>;
  coalesce(
    first: ArrayAtomicAlias | null,
    second: ArrayAtomicAlias | null,
    third?: ArrayAtomicAlias | null,
  ): Promise<ArrayAtomicAlias | null>;
}
