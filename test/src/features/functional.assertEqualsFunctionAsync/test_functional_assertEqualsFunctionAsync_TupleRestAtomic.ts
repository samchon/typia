import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsFunctionAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TupleRestAtomic",
    )(TupleRestAtomic)(
      (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
        typia.functional.assertEqualsFunction(p),
    );
