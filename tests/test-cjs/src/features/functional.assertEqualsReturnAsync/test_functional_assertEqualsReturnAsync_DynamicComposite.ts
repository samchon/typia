import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsReturnAsync_DynamicComposite =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "DynamicComposite",
    )(DynamicComposite)(
      (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
        typia.functional.assertEqualsReturn(p),
    );
