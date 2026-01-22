import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsParametersAsync_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("ToJsonUnion")(
      ToJsonUnion,
    )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.assertEqualsParameters(p),
    );
