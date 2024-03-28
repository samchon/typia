import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertReturnAsyncCustom_TupleUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
