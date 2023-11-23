import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_is_ArrayAtomicAlias = _test_is(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.is<ArrayAtomicAlias>(input),
);
