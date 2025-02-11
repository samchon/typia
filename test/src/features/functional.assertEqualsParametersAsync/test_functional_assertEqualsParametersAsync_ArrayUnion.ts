import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertEqualsParametersAsync_ArrayUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ArrayUnion")(
    ArrayUnion,
  )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
    typia.functional.assertEqualsParameters(p),
  );
