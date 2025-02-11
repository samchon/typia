import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertParametersAsync_TupleUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertParameters(p),
  );
