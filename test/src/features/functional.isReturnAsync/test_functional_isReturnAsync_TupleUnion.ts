import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isReturnAsync_TupleUnion = (): Promise<void> =>
  _test_functional_isReturnAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.isReturn(p),
  );
