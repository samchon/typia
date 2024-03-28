import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertParametersAsync_TupleHierarchical =
  _test_functional_assertParametersAsync(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertParameters(p),
  );
