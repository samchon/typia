import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertFunctionAsyncCustom_TupleOptional =
  _test_functional_assertFunctionAsync(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
