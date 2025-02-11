import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsParametersAsync_TupleOptional =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsParameters(p),
  );
