import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateReturnAsync_TupleRestArray = (): Promise<void> => _test_functional_validateReturnAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.validateReturn(p),
)