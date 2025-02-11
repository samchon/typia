import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsFunctionAsync_TupleOptional =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsFunction(p),
  );
