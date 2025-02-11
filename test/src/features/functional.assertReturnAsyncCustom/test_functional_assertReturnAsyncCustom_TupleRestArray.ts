import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertReturnAsyncCustom_TupleRestArray =
  _test_functional_assertReturnAsync(CustomGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
