import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsParametersAsync_ArraySimple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertEqualsParameters(p),
  );
