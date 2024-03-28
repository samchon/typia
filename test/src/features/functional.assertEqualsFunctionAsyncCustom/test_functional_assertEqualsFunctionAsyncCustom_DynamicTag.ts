import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicTag =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
