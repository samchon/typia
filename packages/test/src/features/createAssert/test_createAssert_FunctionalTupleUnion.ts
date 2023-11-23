import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createAssert_FunctionalTupleUnion = _test_assert(
  "FunctionalTupleUnion",
)<FunctionalTupleUnion>(FunctionalTupleUnion)(
  typia.createAssert<FunctionalTupleUnion>(),
);
