import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_validatePrune_ObjectRequired = (): void =>
  _test_misc_validatePrune("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input) => typia.misc.validatePrune<ObjectRequired>(input),
  );
