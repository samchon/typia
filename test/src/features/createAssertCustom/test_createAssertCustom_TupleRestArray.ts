import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertCustom_TupleRestArray = _test_assert(
  CustomGuardError,
)("TupleRestArray")<TupleRestArray>(TupleRestArray)(
  typia.createAssert<TupleRestArray>((p) => new CustomGuardError(p)),
);
