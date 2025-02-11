import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertFunctionAsync_TupleUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertFunction(p),
  );
