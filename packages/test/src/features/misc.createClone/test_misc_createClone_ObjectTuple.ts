import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_createClone_ObjectTuple = _test_misc_clone(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.misc.createClone<ObjectTuple>());
