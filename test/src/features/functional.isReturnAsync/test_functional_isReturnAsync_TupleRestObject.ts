import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isReturnAsync_TupleRestObject = _test_functional_isReturnAsync(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.isReturn(p),
)