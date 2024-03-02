import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertGuardEquals_TupleRestArray =
  _test_assertGuardEquals(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.createAssertGuardEquals<TupleRestArray>());
