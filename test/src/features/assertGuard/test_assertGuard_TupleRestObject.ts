import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_assertGuard_TupleRestObject = _test_assertGuard(
  TypeGuardError,
)("TupleRestObject")<TupleRestObject>(TupleRestObject)((input) =>
  typia.assertGuard<TupleRestObject>(input),
);
