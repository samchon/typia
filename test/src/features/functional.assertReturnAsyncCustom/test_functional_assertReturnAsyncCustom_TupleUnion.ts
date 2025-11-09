import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TupleUnion = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)