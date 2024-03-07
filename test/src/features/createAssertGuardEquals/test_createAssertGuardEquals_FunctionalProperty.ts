import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_FunctionalProperty =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)(
    typia.createAssertGuardEquals<FunctionalProperty>(),
  );
