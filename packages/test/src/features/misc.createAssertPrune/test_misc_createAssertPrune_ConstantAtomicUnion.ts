import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createAssertPrune_ConstantAtomicUnion =
  _test_misc_assertPrune("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.misc.createAssertPrune<ConstantAtomicUnion>());
