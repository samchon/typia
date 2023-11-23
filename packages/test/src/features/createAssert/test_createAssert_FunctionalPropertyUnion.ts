import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssert_FunctionalPropertyUnion = _test_assert(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createAssert<FunctionalPropertyUnion>(),
);
