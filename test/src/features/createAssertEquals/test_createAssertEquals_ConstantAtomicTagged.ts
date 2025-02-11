import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssertEquals_ConstantAtomicTagged = _test_assertEquals(
  TypeGuardError,
)("ConstantAtomicTagged")<ConstantAtomicTagged>(ConstantAtomicTagged)(
  typia.createAssertEquals<ConstantAtomicTagged>(),
);
