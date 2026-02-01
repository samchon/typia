import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsReturnAsync_TupleRestArray = (): Promise<void> => _test_functional_equalsReturnAsync(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.equalsReturn(p),
)