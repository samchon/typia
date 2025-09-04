import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createAssertGuardEquals_ConstantAtomicTagged = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)(
    typia.createAssertGuardEquals<ConstantAtomicTagged>(),
  );
