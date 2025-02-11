import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assert_TypeTagPattern = _test_assert(TypeGuardError)(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
  typia.assert<TypeTagPattern>(input),
);
