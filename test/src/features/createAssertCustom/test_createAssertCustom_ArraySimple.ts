import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertCustom_ArraySimple = _test_assert(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)(
  typia.createAssert<ArraySimple>((p) => new CustomGuardError(p)),
);
