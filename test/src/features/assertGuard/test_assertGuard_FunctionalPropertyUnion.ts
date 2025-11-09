import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertGuard_FunctionalPropertyUnion = (): void =>
  _test_assertGuard(TypeGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertGuard<FunctionalPropertyUnion>(input),
  );
