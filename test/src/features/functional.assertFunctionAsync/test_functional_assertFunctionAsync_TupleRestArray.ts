import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertFunctionAsync_TupleRestArray =
  _test_functional_assertFunctionAsync(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertFunction(p),
  );
