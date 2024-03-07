import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_createAssert_FunctionalProperty = _test_assert(
  TypeGuardError,
)("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)(
  typia.createAssert<FunctionalProperty>(),
);
