import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assert_TupleRestObject = (): void =>
  _test_assert(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) => typia.assert<TupleRestObject>(input));
