import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createIsPrune_ObjectUndefined = (): void =>
  _test_misc_isPrune("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
    typia.misc.createIsPrune<ObjectUndefined>(),
  );
