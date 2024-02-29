import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_createAssert_ConstantAtomicAbsorbed = _test_assert(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  typia.createAssert<ConstantAtomicAbsorbed>(),
);
