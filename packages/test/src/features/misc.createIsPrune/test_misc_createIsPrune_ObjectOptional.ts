import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createIsPrune_ObjectOptional = _test_misc_isPrune(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.misc.createIsPrune<ObjectOptional>());
