import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssert_TypeTagRange = _test_assert(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.createAssert<TypeTagRange>());
