import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_misc_createPrune_ArrayAtomicAlias = _test_misc_prune(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input: ArrayAtomicAlias): void => {});
