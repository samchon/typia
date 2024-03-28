import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssertEquals_FunctionalProperty = _test_assertEquals(
  TypeGuardError,
)("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)(
  typia.createAssertEquals<FunctionalProperty>(),
);
