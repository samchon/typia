import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_isPrune_ObjectUndefined = _test_misc_isPrune(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.misc.isPrune<ObjectUndefined>(input),
);
