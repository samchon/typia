import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assert_FunctionalValue = _test_assert(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)((input) =>
  typia.assert<FunctionalValue>(input),
);
