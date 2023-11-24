import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertGuard_TypeTagCustom = _test_assertGuard(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertGuard<TypeTagCustom>(input),
);
