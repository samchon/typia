import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsFunctionAsyncCustom_DynamicComposite =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
