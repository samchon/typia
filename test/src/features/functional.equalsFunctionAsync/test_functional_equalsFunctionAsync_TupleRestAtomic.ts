import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_equalsFunctionAsync_TupleRestAtomic = _test_functional_equalsFunctionAsync(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.equalsFunction(p),
)