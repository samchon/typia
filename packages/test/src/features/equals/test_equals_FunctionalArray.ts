import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_equals_FunctionalArray = _test_equals(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)((input) =>
  typia.equals<FunctionalArray>(input),
);
