import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_assert_ObjectPrimitive = _test_assert(TypeGuardError)(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assert<ObjectPrimitive>(input),
);
