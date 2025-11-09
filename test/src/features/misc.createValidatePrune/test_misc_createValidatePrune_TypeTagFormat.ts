import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createValidatePrune_TypeTagFormat = (): void =>
  _test_misc_validatePrune("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
    typia.misc.createValidatePrune<TypeTagFormat>(),
  );
