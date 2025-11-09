import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_DynamicComposite = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)