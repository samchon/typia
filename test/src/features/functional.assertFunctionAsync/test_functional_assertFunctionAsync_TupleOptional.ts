import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertFunctionAsync_TupleOptional =
  _test_functional_assertFunctionAsync(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertFunction(p),
  );
