import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertGuard_UltimateUnion = (): void =>
  _test_assertGuard(TypeGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )((input) => typia.assertGuard<UltimateUnion>(input));
