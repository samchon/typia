import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ConstantAtomicSimple =
  _test_misc_assertPrune(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    typia.misc.assertPrune<ConstantAtomicSimple>(input),
  );
