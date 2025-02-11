import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_equalsReturnAsync_TupleRestAtomic = _test_functional_equalsReturnAsync(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.equalsReturn(p),
)