import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsParametersAsyncCustom_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TupleRestArray",
    )(TupleRestArray)((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
