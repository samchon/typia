import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertParametersAsyncCustom_TupleHierarchical =
  _test_functional_assertParametersAsync(CustomGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
