import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_prune_ConstantAtomicUnion = _test_misc_prune(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  typia.misc.prune<ConstantAtomicUnion>(input),
);
