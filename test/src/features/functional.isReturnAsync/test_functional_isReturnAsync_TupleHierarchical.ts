import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isReturnAsync_TupleHierarchical =
  _test_functional_isReturnAsync("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.isReturn(p),
  );
