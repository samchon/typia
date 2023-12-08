import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createClone_ObjectPrimitive = _test_misc_clone(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(typia.misc.createClone<ObjectPrimitive>());
