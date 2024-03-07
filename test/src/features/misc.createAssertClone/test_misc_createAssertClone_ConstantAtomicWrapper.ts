import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ConstantAtomicWrapper =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.misc.createAssertClone<ConstantAtomicWrapper>(),
  );
