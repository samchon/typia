import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertGuard_FunctionalObjectUnion = _test_assertGuard(
  "FunctionalObjectUnion",
)<FunctionalObjectUnion>(FunctionalObjectUnion)((input) =>
  typia.assertGuard<FunctionalObjectUnion>(input),
);
