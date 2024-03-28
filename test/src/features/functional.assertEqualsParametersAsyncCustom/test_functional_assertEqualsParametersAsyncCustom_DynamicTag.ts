import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicTag =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
