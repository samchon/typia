import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createAssertPrune_ObjectPartialAndRequired =
  _test_misc_assertPrune("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )(typia.misc.createAssertPrune<ObjectPartialAndRequired>());
