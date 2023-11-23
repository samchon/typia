import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_equals_ArrayAtomicSimple = _test_equals(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.equals<ArrayAtomicSimple>(input),
);
