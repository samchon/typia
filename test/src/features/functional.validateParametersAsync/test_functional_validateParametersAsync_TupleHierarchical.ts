import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateParametersAsync_TupleHierarchical =
  _test_functional_validateParametersAsync("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.validateParameters(p),
  );
