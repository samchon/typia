import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsReturnAsyncCustom_TupleOptional =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
