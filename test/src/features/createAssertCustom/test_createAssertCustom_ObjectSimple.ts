import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertCustom_ObjectSimple = _test_assert(
  CustomGuardError,
)("ObjectSimple")<ObjectSimple>(ObjectSimple)(
  typia.createAssert<ObjectSimple>((p) => new CustomGuardError(p)),
);
