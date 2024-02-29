import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssertGuard_ConstantAtomicAbsorbed = _test_assertGuard(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  typia.createAssertGuard<ConstantAtomicAbsorbed>(),
);
