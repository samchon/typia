import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertGuard_FunctionalPropertyUnion = _test_assertGuard(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createAssertGuard<FunctionalPropertyUnion>(),
);
