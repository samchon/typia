import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TupleUnion =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertEqualsFunction(p),
  );
