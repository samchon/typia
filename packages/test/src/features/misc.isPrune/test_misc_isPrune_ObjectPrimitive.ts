import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_isPrune_ObjectPrimitive = _test_misc_isPrune(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.misc.isPrune<ObjectPrimitive>(input),
);
