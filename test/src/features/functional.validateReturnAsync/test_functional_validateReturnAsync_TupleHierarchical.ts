import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateReturnAsync_TupleHierarchical =
  _test_functional_validateReturnAsync("TupleHierarchical")(TupleHierarchical)(
    (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.validateReturn(p),
  );
