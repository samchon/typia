import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TupleOptional =
  _test_functional_assertParametersAsync(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertParameters(p),
  );
