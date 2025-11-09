import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_createValidatePrune_ArrayUnion = (): void =>
  _test_misc_validatePrune("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.misc.createValidatePrune<ArrayUnion>(),
  );
