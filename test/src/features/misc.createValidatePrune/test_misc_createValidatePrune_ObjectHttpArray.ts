import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_createValidatePrune_ObjectHttpArray = (): void =>
  _test_misc_validatePrune("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
    typia.misc.createValidatePrune<ObjectHttpArray>(),
  );
