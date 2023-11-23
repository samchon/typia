import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createAssertPrune_ObjectRequired =
  _test_misc_assertPrune("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.misc.createAssertPrune<ObjectRequired>(),
  );
