import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsReturnAsync_TupleUnion =
  _test_functional_validateEqualsReturnAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.validateEqualsReturn(p),
  );
