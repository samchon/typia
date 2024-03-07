import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ConstantAtomicWrapper = _test_assertEquals(
  TypeGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  typia.createAssertEquals<ConstantAtomicWrapper>(),
);
