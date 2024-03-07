import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_assertGuard_ConstantAtomicAbsorbed = _test_assertGuard(
  TypeGuardError,
)("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  (input) => typia.assertGuard<ConstantAtomicAbsorbed>(input),
);
