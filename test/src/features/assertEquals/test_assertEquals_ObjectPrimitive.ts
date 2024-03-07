import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectPrimitive = _test_assertEquals(
  TypeGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assertEquals<ObjectPrimitive>(input),
);
