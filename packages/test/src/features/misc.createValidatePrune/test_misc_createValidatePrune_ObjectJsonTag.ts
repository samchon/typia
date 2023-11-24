import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_createValidatePrune_ObjectJsonTag =
  _test_misc_validatePrune("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    typia.misc.createValidatePrune<ObjectJsonTag>(),
  );
