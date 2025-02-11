import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsReturnAsync_TupleUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertEqualsReturn(p),
  );
