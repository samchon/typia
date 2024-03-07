import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_assert_FunctionalArray = _test_assert(TypeGuardError)(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)((input) =>
  typia.assert<FunctionalArray>(input),
);
