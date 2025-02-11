import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsFunctionAsync_DynamicComposite =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsFunction(p),
  );
