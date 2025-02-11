import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsParametersAsyncCustom_TupleOptional =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TupleOptional",
  )(TupleOptional)((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
