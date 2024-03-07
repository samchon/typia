import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateReturnAsync_TupleUnion =
  _test_functional_validateReturnAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.validateReturn(p),
  );
