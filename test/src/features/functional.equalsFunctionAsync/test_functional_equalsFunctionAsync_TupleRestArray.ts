import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsFunctionAsync_TupleRestArray = _test_functional_equalsFunctionAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.equalsFunction(p),
)