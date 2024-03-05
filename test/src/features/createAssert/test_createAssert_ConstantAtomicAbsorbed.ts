import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssert_ConstantAtomicAbsorbed = _test_assert(
  TypeGuardError,
)("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  typia.createAssert<ConstantAtomicAbsorbed>(),
);
