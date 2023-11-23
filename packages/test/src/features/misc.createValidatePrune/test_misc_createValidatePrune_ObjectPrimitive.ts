import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createValidatePrune_ObjectPrimitive =
  _test_misc_validatePrune("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.misc.createValidatePrune<ObjectPrimitive>(),
  );
