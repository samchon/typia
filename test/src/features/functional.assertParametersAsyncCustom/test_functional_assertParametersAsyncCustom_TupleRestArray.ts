import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertParametersAsyncCustom_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("TupleRestArray")(
      TupleRestArray,
    )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
