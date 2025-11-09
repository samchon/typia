import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsReturnAsync_TupleOptional =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleOptional")(
      TupleOptional,
    )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
      typia.functional.assertEqualsReturn(p),
    );
