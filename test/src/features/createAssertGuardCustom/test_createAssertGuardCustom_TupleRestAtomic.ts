import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertGuardCustom_TupleRestAtomic = _test_assertGuard(
  CustomGuardError,
)("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
  typia.createAssertGuard<TupleRestAtomic>((p) => new CustomGuardError(p)),
);
