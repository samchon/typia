import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertEqualsFunctionAsync_TupleRestArray =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertEqualsFunction(p),
  );
