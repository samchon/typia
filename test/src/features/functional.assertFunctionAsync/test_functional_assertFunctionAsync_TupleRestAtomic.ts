import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertFunctionAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.assertFunction(p),
    );
