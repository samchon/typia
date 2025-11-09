import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createIsPrune_ArrayRecursive = (): void =>
  _test_misc_isPrune("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.misc.createIsPrune<ArrayRecursive>(),
  );
