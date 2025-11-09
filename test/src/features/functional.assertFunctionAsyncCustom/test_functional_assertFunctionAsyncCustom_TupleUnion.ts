import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertFunctionAsyncCustom_TupleUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TupleUnion")(
      TupleUnion,
    )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
