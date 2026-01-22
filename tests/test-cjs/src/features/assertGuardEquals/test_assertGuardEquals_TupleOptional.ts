import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertGuardEquals_TupleOptional = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )((input) => typia.assertGuardEquals<TupleOptional>(input));
