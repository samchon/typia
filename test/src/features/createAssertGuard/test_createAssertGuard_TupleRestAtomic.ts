import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertGuard_TupleRestAtomic = (): void =>
  _test_assertGuard(TypeGuardError)("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.createAssertGuard<TupleRestAtomic>());
