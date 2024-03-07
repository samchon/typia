import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArraySimple = _test_assert(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)(
  typia.createAssert<ArraySimple>((p) => new CustomGuardError(p)),
);
