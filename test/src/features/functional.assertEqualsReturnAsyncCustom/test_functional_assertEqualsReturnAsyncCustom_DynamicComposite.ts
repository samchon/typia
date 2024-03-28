import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicComposite =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
