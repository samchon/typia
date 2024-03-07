import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagCustom = _test_assertGuard(TypeGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertGuard<TypeTagCustom>(input),
);
