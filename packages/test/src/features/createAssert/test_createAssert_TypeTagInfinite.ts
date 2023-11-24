import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssert_TypeTagInfinite = _test_assert(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)(typia.createAssert<TypeTagInfinite>());
