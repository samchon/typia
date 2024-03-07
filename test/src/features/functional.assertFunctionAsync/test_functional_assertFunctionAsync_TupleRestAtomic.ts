import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TupleRestAtomic =
  _test_functional_assertFunctionAsync(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertFunction(p),
  );
