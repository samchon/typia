import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssert_ConstantAtomicSimple = (): void =>
  _test_assert(TypeGuardError)("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )(typia.createAssert<ConstantAtomicSimple>());
