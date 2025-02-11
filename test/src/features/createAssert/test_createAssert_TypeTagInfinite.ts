import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssert_TypeTagInfinite = _test_assert(TypeGuardError)(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createAssert<TypeTagInfinite>());
