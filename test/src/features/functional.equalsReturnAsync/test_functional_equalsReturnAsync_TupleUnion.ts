import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsReturnAsync_TupleUnion =
  _test_functional_equalsReturnAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.equalsReturn(p),
  );
