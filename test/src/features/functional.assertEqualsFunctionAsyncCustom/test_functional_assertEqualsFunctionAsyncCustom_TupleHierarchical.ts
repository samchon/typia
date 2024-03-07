import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleHierarchical =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TupleHierarchical",
  )(TupleHierarchical)(
    (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
