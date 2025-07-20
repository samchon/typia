import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsReturnAsyncCustom_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TupleRestArray",
    )(TupleRestArray)((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
