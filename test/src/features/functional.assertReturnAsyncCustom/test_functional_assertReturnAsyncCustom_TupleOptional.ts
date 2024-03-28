import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertReturnAsyncCustom_TupleOptional =
  _test_functional_assertReturnAsync(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => Promise<TupleOptional>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
