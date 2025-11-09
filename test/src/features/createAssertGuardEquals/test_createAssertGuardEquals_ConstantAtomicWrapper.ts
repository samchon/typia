import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createAssertGuardEquals_ConstantAtomicWrapper = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createAssertGuardEquals<ConstantAtomicWrapper>(),
  );
