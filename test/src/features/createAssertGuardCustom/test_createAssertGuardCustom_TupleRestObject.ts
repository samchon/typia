import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TupleRestObject = _test_assertGuard(
  CustomGuardError,
)("TupleRestObject")<TupleRestObject>(TupleRestObject)(
  typia.createAssertGuard<TupleRestObject>((p) => new CustomGuardError(p)),
);
