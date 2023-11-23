import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_misc_createPrune_ConstantAtomicSimple = _test_misc_prune(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)(
  typia.misc.createPrune<ConstantAtomicSimple>(),
);
