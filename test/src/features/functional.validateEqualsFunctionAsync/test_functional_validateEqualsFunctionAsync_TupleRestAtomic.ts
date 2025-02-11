import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateEqualsFunctionAsync_TupleRestAtomic = _test_functional_validateEqualsFunctionAsync(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.validateEqualsFunction(p),
)