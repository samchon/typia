import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_validate_ConstantAtomicUnion = _test_validate(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.validate<ConstantAtomicUnion>(input),
);
