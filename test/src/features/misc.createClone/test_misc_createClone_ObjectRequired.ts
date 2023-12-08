import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createClone_ObjectRequired = _test_misc_clone(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.misc.createClone<ObjectRequired>());
