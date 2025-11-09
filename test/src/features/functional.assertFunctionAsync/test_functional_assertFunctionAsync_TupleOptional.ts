import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TupleOptional = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "TupleOptional"
)(TupleOptional)(
  (p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertFunction(p),
)