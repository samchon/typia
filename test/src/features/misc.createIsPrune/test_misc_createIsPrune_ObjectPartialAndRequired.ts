import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createIsPrune_ObjectPartialAndRequired = (): void =>
  _test_misc_isPrune("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )(typia.misc.createIsPrune<ObjectPartialAndRequired>());
