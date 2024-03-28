import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertGuardEquals_TupleOptional =
  _test_assertGuardEquals(TypeGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )(typia.createAssertGuardEquals<TupleOptional>());
