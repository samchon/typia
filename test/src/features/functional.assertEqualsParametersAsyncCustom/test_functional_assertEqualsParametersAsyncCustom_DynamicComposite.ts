import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsParametersAsyncCustom_DynamicComposite =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
