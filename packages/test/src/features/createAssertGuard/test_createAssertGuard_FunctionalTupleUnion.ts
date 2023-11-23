import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssertGuard_FunctionalTupleUnion = _test_assertGuard(
  "FunctionalTupleUnion",
)<FunctionalTupleUnion>(FunctionalTupleUnion)(
  typia.createAssertGuard<FunctionalTupleUnion>(),
);
