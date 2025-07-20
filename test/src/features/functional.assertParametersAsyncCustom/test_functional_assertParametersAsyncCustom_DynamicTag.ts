import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertParametersAsyncCustom_DynamicTag =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("DynamicTag")(
      DynamicTag,
    )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
