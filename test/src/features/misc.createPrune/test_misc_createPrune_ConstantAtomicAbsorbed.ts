import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_misc_createPrune_ConstantAtomicAbsorbed = _test_misc_prune(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  typia.misc.createPrune<ConstantAtomicAbsorbed>(),
);
