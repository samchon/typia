import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createValidatePrune_ObjectOptional =
  _test_misc_validatePrune("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    typia.misc.createValidatePrune<ObjectOptional>(),
  );
