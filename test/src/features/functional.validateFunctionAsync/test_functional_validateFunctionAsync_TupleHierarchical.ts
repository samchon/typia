import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateFunctionAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TupleHierarchical")(
      TupleHierarchical,
    )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.validateFunction(p),
    );
