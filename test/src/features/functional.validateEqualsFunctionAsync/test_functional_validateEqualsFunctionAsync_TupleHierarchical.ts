import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsFunctionAsync_TupleHierarchical =
  _test_functional_validateEqualsFunctionAsync("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.validateEqualsFunction(p),
  );
