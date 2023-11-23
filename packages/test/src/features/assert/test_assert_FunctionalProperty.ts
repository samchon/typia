import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assert_FunctionalProperty = _test_assert(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.assert<FunctionalProperty>(input),
);
