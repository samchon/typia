import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_validateEquals_ConstantAtomicAbsorbed = _test_validateEquals(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  typia.validateEquals<ConstantAtomicAbsorbed>(input),
);
