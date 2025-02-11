import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_FunctionalTupleUnion = _test_functional_assertReturnAsync(CustomGuardError)(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)