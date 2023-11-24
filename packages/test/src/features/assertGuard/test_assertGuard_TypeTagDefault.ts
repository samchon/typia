import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertGuard_TypeTagDefault = _test_assertGuard(
  "TypeTagDefault",
)<TypeTagDefault>(TypeTagDefault)((input) =>
  typia.assertGuard<TypeTagDefault>(input),
);
