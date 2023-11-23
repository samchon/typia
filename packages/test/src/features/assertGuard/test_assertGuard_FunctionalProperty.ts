import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertGuard_FunctionalProperty = _test_assertGuard(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
  typia.assertGuard<FunctionalProperty>(input),
);
