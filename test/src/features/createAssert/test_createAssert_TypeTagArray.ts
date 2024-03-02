import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssert_TypeTagArray = _test_assert(TypeGuardError)(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.createAssert<TypeTagArray>());
