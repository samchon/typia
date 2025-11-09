import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertParametersAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TupleOptional")(
      TupleOptional,
    )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.assertParameters(p),
    );
