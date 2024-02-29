import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_is_ConstantAtomicAbsorbed = _test_is(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  typia.is<ConstantAtomicAbsorbed>(input),
);
