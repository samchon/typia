import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createAssertCustom_TupleUnion = _test_assert(
  CustomGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(
  typia.createAssert<TupleUnion>((p) => new CustomGuardError(p)),
);
