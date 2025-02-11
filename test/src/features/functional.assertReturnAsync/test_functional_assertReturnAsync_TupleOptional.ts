import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertReturnAsync_TupleOptional =
  _test_functional_assertReturnAsync(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertReturn(p),
  );
