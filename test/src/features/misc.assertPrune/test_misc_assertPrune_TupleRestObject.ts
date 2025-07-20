import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertPrune_TupleRestObject = (): void =>
  _test_misc_assertPrune(TypeGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) => typia.misc.assertPrune<TupleRestObject>(input));
