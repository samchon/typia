import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TupleOptional = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsReturn(p),
)