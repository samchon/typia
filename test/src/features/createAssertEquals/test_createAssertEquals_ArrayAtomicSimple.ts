import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertEquals_ArrayAtomicSimple = (): void =>
  _test_assertEquals(TypeGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(typia.createAssertEquals<ArrayAtomicSimple>());
