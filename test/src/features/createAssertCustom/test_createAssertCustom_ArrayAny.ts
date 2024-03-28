import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createAssertCustom_ArrayAny = _test_assert(CustomGuardError)(
  "ArrayAny",
)<ArrayAny>(ArrayAny)(
  typia.createAssert<ArrayAny>((p) => new CustomGuardError(p)),
);
