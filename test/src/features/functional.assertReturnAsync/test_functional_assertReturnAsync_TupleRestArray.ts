import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertReturnAsync_TupleRestArray =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TupleRestArray")(
      TupleRestArray,
    )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
      typia.functional.assertReturn(p),
    );
