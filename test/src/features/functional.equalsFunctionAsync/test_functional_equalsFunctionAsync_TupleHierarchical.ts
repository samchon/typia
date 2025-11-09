import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_equalsFunctionAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TupleHierarchical")(
      TupleHierarchical,
    )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.equalsFunction(p),
    );
