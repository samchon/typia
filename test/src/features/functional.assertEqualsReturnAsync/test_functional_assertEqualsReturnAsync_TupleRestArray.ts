import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsReturnAsync_TupleRestArray =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertEqualsReturn(p),
  );
