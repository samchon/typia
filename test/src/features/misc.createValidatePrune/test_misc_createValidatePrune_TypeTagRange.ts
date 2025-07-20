import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_createValidatePrune_TypeTagRange = (): void =>
  _test_misc_validatePrune("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    typia.misc.createValidatePrune<TypeTagRange>(),
  );
