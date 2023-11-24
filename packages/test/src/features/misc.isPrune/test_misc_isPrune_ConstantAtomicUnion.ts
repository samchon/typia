import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_isPrune_ConstantAtomicUnion = _test_misc_isPrune(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.misc.isPrune<ConstantAtomicUnion>(input),
);
