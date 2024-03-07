import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectPrimitive = _test_assertEquals(
  CustomGuardError,
)("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
  typia.createAssertEquals<ObjectPrimitive>((p) => new CustomGuardError(p)),
);
