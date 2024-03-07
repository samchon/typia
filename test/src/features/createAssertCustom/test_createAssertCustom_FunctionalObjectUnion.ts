import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_FunctionalObjectUnion = _test_assert(
  CustomGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  typia.createAssert<FunctionalObjectUnion>((p) => new CustomGuardError(p)),
);
