import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createAssertCustom_ObjectPrimitive = _test_assert(
  CustomGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
  typia.createAssert<ObjectPrimitive>((p) => new CustomGuardError(p)),
);
