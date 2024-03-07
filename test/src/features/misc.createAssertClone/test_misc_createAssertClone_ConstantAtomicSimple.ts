import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantAtomicSimple =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.misc.createAssertClone<ConstantAtomicSimple>(),
  );
