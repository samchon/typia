import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsFunctionAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TupleHierarchical",
    )(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.assertEqualsFunction(p),
    );
