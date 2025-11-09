import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_validatePrune_ObjectRecursive = (): void =>
  _test_misc_validatePrune("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.misc.validatePrune<ObjectRecursive>(input),
  );
