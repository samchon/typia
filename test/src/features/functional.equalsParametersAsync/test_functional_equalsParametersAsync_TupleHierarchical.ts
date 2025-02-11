import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsParametersAsync_TupleHierarchical =
  _test_functional_equalsParametersAsync("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.equalsParameters(p),
  );
