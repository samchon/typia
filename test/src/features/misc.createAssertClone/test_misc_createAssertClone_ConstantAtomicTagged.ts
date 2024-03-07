import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantAtomicTagged =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)(
    typia.misc.createAssertClone<ConstantAtomicTagged>(),
  );
