import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_createAssertPrune_TupleOptional = _test_misc_assertPrune(
  TypeGuardError,
)("TupleOptional")<TupleOptional>(TupleOptional)(
  typia.misc.createAssertPrune<TupleOptional>(),
);
