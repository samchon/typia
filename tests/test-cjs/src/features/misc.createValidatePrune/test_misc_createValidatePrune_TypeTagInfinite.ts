import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_createValidatePrune_TypeTagInfinite = (): void =>
  _test_misc_validatePrune("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
    typia.misc.createValidatePrune<TypeTagInfinite>(),
  );
