import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertFunctionAsyncCustom_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TupleRestArray")(
      TupleRestArray,
    )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
