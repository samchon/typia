import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_assertGuard_FunctionalArrayUnion = (): void =>
  _test_assertGuard(TypeGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)((input) =>
    typia.assertGuard<FunctionalArrayUnion>(input),
  );
