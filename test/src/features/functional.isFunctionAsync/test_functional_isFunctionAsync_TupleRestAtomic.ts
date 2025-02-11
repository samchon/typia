import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isFunctionAsync_TupleRestAtomic = _test_functional_isFunctionAsync(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.isFunction(p),
)