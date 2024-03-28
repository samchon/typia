import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertParametersAsync_ToJsonUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertParameters(p),
  );
