import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleRestObject = _test_assertGuard(
  CustomGuardError,
)("TupleRestObject")<TupleRestObject>(TupleRestObject)((input) =>
  typia.assertGuard<TupleRestObject>(input, (p) => new CustomGuardError(p)),
);
