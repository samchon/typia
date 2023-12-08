import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssert_FunctionalArrayUnion = _test_assert(
  "FunctionalArrayUnion",
)<FunctionalArrayUnion>(FunctionalArrayUnion)(
  typia.createAssert<FunctionalArrayUnion>(),
);
