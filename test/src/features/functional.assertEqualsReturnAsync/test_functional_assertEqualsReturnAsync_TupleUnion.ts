import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TupleUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertEqualsReturn(p),
)