import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertCustom_FunctionalObjectUnion = _test_assert(
  CustomGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  typia.createAssert<FunctionalObjectUnion>((p) => new CustomGuardError(p)),
);
