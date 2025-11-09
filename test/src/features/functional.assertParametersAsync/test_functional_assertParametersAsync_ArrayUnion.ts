import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertParametersAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ArrayUnion")(
      ArrayUnion,
    )((p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
      typia.functional.assertParameters(p),
    );
