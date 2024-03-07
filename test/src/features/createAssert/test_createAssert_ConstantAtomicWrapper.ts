import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_createAssert_ConstantAtomicWrapper = _test_assert(
  TypeGuardError,
)("ConstantAtomicWrapper")<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
  typia.createAssert<ConstantAtomicWrapper>(),
);
