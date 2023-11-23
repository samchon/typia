import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_misc_createPrune_ArrayAtomicSimple = _test_misc_prune(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input: ArrayAtomicSimple): void => {});
