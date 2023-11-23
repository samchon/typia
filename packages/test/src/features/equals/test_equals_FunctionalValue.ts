import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_equals_FunctionalValue = _test_equals(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)((input) =>
  typia.equals<FunctionalValue>(input),
);
