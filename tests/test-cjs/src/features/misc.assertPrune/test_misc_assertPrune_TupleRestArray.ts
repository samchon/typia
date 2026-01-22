import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_assertPrune_TupleRestArray = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) => typia.misc.assertPrune<TupleRestArray>(input));
