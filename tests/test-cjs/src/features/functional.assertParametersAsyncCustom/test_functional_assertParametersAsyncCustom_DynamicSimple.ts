import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertParametersAsyncCustom_DynamicSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("DynamicSimple")(
      DynamicSimple,
    )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
