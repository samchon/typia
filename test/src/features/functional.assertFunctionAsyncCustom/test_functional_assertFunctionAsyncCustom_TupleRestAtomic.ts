import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TupleRestAtomic =
  _test_functional_assertFunctionAsync(CustomGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
