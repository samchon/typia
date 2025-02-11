import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertParametersAsyncCustom_DynamicComposite =
  _test_functional_assertParametersAsync(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
