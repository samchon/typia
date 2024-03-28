import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleOptional =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
