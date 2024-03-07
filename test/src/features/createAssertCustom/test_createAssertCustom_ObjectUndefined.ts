import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectUndefined = _test_assert(
  CustomGuardError,
)("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
  typia.createAssert<ObjectUndefined>((p) => new CustomGuardError(p)),
);
