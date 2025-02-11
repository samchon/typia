import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertCustom_ObjectPartial = _test_assert(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)(
  typia.createAssert<ObjectPartial>((p) => new CustomGuardError(p)),
);
