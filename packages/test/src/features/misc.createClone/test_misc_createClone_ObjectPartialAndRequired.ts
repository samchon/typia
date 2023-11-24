import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_createClone_ObjectPartialAndRequired = _test_misc_clone(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
  typia.misc.createClone<ObjectPartialAndRequired>(),
);
