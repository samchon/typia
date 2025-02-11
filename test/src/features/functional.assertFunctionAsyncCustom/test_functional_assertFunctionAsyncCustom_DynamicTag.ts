import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertFunctionAsyncCustom_DynamicTag =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
