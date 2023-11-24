import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_assertClone_ArrayAtomicAlias = _test_misc_assertClone(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.misc.assertClone<ArrayAtomicAlias>(input),
);
