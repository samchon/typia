import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsReturnAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TupleHierarchical",
    )(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.assertEqualsReturn(p),
    );
