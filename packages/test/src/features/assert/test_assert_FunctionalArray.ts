import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assert_FunctionalArray = _test_assert(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)((input) =>
  typia.assert<FunctionalArray>(input),
);
