import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertEquals_TupleRestAtomic = _test_assertEquals(
  TypeGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
  typia.createAssertEquals<TupleRestAtomic>(),
);
