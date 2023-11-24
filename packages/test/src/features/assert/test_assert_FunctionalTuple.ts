import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_assert_FunctionalTuple = _test_assert(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input) =>
  typia.assert<FunctionalTuple>(input),
);
