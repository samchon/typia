import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertCustom_ObjectPropertyNullable = _test_assert(
  CustomGuardError,
)("ObjectPropertyNullable")<ObjectPropertyNullable>(ObjectPropertyNullable)(
  typia.createAssert<ObjectPropertyNullable>((p) => new CustomGuardError(p)),
);
