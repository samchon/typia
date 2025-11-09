import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertGuardEquals_FunctionalArrayUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
    typia.assertGuardEquals<FunctionalArrayUnion>(input),
  );
