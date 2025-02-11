import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsFunctionAsync_TupleRestObject = _test_functional_equalsFunctionAsync(
  "TupleRestObject"
)(TupleRestObject)(
  (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.equalsFunction(p),
)