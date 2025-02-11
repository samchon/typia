import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TupleRestAtomic = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertEqualsFunction(p),
)