import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertParametersAsyncCustom_TupleUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("TupleUnion")(
    TupleUnion,
  )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
