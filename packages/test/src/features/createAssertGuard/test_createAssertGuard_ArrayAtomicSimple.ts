import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertGuard_ArrayAtomicSimple = _test_assertGuard(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.createAssertGuard<ArrayAtomicSimple>(),
);
