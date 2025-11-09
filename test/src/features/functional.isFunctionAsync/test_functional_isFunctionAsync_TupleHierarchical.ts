import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isFunctionAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("TupleHierarchical")(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.isFunction(p),
    );
