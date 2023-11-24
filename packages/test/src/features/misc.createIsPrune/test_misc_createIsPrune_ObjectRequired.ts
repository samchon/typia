import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createIsPrune_ObjectRequired = _test_misc_isPrune(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.misc.createIsPrune<ObjectRequired>());
