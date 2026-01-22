import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TupleUnion")(
      TupleUnion,
    )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
