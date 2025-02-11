import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsFunctionAsync_TupleRestArray = _test_functional_validateEqualsFunctionAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.validateEqualsFunction(p),
)