import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isFunctionAsync_TupleRestObject = _test_functional_isFunctionAsync(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.isFunction(p),
)