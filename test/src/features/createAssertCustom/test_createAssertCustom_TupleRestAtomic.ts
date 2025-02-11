import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertCustom_TupleRestAtomic = _test_assert(
  CustomGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
  typia.createAssert<TupleRestAtomic>((p) => new CustomGuardError(p)),
);
