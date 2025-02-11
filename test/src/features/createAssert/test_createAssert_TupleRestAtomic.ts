import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssert_TupleRestAtomic = _test_assert(TypeGuardError)(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)(typia.createAssert<TupleRestAtomic>());
