import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertGuard_FunctionalValueUnion = _test_assertGuard(
  "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)(
  typia.createAssertGuard<FunctionalValueUnion>(),
);
