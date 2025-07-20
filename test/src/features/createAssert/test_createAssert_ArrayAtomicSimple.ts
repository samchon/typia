import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssert_ArrayAtomicSimple = (): void =>
  _test_assert(TypeGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssert<ArrayAtomicSimple>());
