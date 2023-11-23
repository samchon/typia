import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssert_FunctionalArray = _test_assert(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)(typia.createAssert<FunctionalArray>());
