import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertReturnAsync_DynamicComposite =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("DynamicComposite")(
      DynamicComposite,
    )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertReturn(p),
    );
