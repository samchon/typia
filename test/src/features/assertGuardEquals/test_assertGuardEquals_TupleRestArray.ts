import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertGuardEquals_TupleRestArray = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) => typia.assertGuardEquals<TupleRestArray>(input));
