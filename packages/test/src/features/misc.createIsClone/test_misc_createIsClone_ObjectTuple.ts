import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_createIsClone_ObjectTuple = _test_misc_isClone(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.misc.createIsClone<ObjectTuple>());
