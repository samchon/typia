import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_assertEqualsParametersAsync_TupleUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("TupleUnion")(
      TupleUnion,
    )((p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.assertEqualsParameters(p),
    );
