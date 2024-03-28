import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssert_ConstantAtomicTagged = _test_assert(
  TypeGuardError,
)("ConstantAtomicTagged")<ConstantAtomicTagged>(ConstantAtomicTagged)(
  typia.createAssert<ConstantAtomicTagged>(),
);
