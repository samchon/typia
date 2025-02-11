import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertCustom_FunctionalPropertyUnion = _test_assert(
  CustomGuardError,
)("FunctionalPropertyUnion")<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createAssert<FunctionalPropertyUnion>((p) => new CustomGuardError(p)),
);
