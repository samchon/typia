import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertEquals_ArrayAtomicAlias = _test_assertEquals(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.assertEquals<ArrayAtomicAlias>(input),
);
