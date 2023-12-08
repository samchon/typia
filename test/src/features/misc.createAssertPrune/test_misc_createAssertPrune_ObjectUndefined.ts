import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createAssertPrune_ObjectUndefined =
  _test_misc_assertPrune("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
    typia.misc.createAssertPrune<ObjectUndefined>(),
  );
