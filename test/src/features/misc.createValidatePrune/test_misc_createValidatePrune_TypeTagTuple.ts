import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createValidatePrune_TypeTagTuple =
  _test_misc_validatePrune("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.misc.createValidatePrune<TypeTagTuple>(),
  );
