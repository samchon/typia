import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsReturnAsync_TupleHierarchical =
  _test_functional_validateEqualsReturnAsync("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.validateEqualsReturn(p),
  );
