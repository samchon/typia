import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_createValidatePrune_ConstantAtomicUnion =
  _test_misc_validatePrune("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )(typia.misc.createValidatePrune<ConstantAtomicUnion>());
