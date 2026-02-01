import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isFunctionAsync_TupleRestArray = (): Promise<void> => _test_functional_isFunctionAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.isFunction(p),
)