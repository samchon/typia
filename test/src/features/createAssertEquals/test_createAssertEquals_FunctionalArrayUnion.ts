import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertEquals_FunctionalArrayUnion = _test_assertEquals(
  TypeGuardError,
)("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)(
  typia.createAssertEquals<FunctionalArrayUnion>(),
);
