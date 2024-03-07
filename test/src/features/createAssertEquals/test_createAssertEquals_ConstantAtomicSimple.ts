import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ConstantAtomicSimple = _test_assertEquals(
  TypeGuardError,
)("ConstantAtomicSimple")<ConstantAtomicSimple>(ConstantAtomicSimple)(
  typia.createAssertEquals<ConstantAtomicSimple>(),
);
