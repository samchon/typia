import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_assert_ObjectPrimitive = _test_assert(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assert<ObjectPrimitive>(input),
);
