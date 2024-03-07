import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicComposite =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
