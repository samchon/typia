import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertFunctionAsync_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonUnion")(
      ToJsonUnion,
    )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.assertFunction(p),
    );
