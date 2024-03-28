import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertFunctionAsyncCustom_TupleHierarchical =
  _test_functional_assertFunctionAsync(CustomGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
