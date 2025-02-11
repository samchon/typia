import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsReturnAsyncCustom_TupleUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
