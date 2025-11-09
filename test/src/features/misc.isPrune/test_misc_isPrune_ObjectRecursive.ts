import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_isPrune_ObjectRecursive = (): void =>
  _test_misc_isPrune("ObjectRecursive")<ObjectRecursive>(ObjectRecursive)(
    (input) => typia.misc.isPrune<ObjectRecursive>(input),
  );
