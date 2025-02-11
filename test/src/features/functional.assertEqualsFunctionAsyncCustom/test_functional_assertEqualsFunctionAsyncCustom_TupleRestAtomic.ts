import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleRestAtomic =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TupleRestAtomic",
  )(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
