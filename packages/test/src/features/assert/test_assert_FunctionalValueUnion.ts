import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assert_FunctionalValueUnion = _test_assert(
  "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
  typia.assert<FunctionalValueUnion>(input),
);
