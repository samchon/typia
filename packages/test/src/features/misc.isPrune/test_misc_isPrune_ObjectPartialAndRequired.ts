import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_isPrune_ObjectPartialAndRequired = _test_misc_isPrune(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
  typia.misc.isPrune<ObjectPartialAndRequired>(input),
);
