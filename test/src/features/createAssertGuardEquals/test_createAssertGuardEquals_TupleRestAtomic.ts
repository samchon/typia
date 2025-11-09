import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertGuardEquals_TupleRestAtomic = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.createAssertGuardEquals<TupleRestAtomic>());
