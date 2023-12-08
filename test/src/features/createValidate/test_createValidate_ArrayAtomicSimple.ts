import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidate_ArrayAtomicSimple = _test_validate(
  "ArrayAtomicSimple",
)<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.createValidate<ArrayAtomicSimple>(),
);
