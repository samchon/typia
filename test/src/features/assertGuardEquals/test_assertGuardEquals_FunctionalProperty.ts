import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertGuardEquals_FunctionalProperty = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)((input) =>
    typia.assertGuardEquals<FunctionalProperty>(input),
  );
