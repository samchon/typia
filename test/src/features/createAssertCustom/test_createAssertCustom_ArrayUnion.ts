import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertCustom_ArrayUnion = _test_assert(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
  typia.createAssert<ArrayUnion>((p) => new CustomGuardError(p)),
);
