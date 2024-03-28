import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertParametersAsyncCustom_TupleOptional =
  _test_functional_assertParametersAsync(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
