import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TupleHierarchical = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)