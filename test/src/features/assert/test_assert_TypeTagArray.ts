import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagArray = _test_assert(TypeGuardError)(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input) => typia.assert<TypeTagArray>(input));
