import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_FunctionalObjectUnion = _test_assertEquals(
  TypeGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  typia.createAssertEquals<FunctionalObjectUnion>(),
);
