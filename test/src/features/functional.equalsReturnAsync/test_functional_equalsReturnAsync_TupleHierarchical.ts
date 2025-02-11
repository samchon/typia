import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsReturnAsync_TupleHierarchical =
  _test_functional_equalsReturnAsync("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.equalsReturn(p),
  );
