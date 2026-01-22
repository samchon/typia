import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createEquals_ArrayAtomicSimple = (): void =>
  _test_equals("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
    typia.createEquals<ArrayAtomicSimple>(),
  );
