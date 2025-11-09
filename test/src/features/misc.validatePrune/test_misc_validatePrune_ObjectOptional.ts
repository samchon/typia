import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_validatePrune_ObjectOptional = (): void =>
  _test_misc_validatePrune("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    (input) => typia.misc.validatePrune<ObjectOptional>(input),
  );
