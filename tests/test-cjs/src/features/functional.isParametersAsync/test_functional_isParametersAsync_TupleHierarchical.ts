import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_isParametersAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TupleHierarchical")(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.isParameters(p),
    );
