import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createAssertPrune_ConstantAtomicSimple = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.misc.createAssertPrune<ConstantAtomicSimple>(),
  );
