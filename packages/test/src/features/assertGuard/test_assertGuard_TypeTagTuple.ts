import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertGuard_TypeTagTuple = _test_assertGuard(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.assertGuard<TypeTagTuple>(input),
);
