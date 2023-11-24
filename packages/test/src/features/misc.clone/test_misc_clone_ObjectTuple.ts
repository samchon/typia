import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_clone_ObjectTuple = _test_misc_clone(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) => typia.misc.clone<ObjectTuple>(input));
