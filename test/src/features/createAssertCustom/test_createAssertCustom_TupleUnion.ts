import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TupleUnion = _test_assert(
  CustomGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(
  typia.createAssert<TupleUnion>((p) => new CustomGuardError(p)),
);
