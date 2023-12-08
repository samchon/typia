import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssert_FunctionalValueUnion = _test_assert(
  "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)(
  typia.createAssert<FunctionalValueUnion>(),
);
