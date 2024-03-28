import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertGuardCustom_TupleRestArray = _test_assertGuard(
  CustomGuardError,
)("TupleRestArray")<TupleRestArray>(TupleRestArray)(
  typia.createAssertGuard<TupleRestArray>((p) => new CustomGuardError(p)),
);
