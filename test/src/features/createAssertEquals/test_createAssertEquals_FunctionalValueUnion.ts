import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertEquals_FunctionalValueUnion = _test_assertEquals(
  TypeGuardError,
)("FunctionalValueUnion")<FunctionalValueUnion>(FunctionalValueUnion)(
  typia.createAssertEquals<FunctionalValueUnion>(),
);
