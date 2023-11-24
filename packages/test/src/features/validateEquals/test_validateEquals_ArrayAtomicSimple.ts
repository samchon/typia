import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_validateEquals_ArrayAtomicSimple = _test_validateEquals(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.validateEquals<ArrayAtomicSimple>(input),
);
