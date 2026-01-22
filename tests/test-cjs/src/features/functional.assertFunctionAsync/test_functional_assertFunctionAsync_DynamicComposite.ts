import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertFunctionAsync_DynamicComposite =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("DynamicComposite")(
      DynamicComposite,
    )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertFunction(p),
    );
