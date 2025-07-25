import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertGuardEquals_TupleRestObject = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) => typia.assertGuardEquals<TupleRestObject>(input));
