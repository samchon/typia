import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_validate_ConstantAtomicAbsorbed = _test_validate(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  typia.validate<ConstantAtomicAbsorbed>(input),
);
