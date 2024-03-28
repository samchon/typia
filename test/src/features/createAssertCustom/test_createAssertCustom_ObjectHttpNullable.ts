import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertCustom_ObjectHttpNullable = _test_assert(
  CustomGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createAssert<ObjectHttpNullable>((p) => new CustomGuardError(p)),
);
