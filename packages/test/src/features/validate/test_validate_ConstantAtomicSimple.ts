import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validate_ConstantAtomicSimple = _test_validate(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  typia.validate<ConstantAtomicSimple>(input),
);
