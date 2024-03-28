import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_ToJsonUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
