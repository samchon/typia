import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_is_ObjectPrimitive = _test_is(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.is<ObjectPrimitive>(input),
);
