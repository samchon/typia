import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createValidatePrune_ObjectDescription = (): void =>
  _test_misc_validatePrune("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.misc.createValidatePrune<ObjectDescription>());
