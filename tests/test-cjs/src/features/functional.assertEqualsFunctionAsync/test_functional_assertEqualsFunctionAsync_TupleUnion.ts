import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsFunctionAsync_TupleUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TupleUnion")(
      TupleUnion,
    )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.assertEqualsFunction(p),
    );
