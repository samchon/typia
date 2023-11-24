import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_is_ConstantAtomicUnion = _test_is(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.is<ConstantAtomicUnion>(input),
);
