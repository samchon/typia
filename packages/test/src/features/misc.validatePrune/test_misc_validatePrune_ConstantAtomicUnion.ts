import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_validatePrune_ConstantAtomicUnion =
  _test_misc_validatePrune("ConstantAtomicUnion")<ConstantAtomicUnion>(
    ConstantAtomicUnion,
  )((input) => typia.misc.validatePrune<ConstantAtomicUnion>(input));
