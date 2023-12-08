import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assert_ArrayAtomicAlias = _test_assert(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.assert<ArrayAtomicAlias>(input),
);
