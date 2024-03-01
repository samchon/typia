import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssert_FunctionalPropertyUnion = _test_assert(
  TypeGuardError,
)("FunctionalPropertyUnion")<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createAssert<FunctionalPropertyUnion>(),
);
