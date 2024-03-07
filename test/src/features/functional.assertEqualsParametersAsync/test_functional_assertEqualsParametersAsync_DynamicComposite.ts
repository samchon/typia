import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_DynamicComposite =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "DynamicComposite",
  )(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.assertEqualsParameters(p),
  );
