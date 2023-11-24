import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_createValidatePrune_ObjectGenericAlias =
  _test_misc_validatePrune("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )(typia.misc.createValidatePrune<ObjectGenericAlias>());
