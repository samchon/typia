import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsFunctionAsync_DynamicEnumeration =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "DynamicEnumeration",
  )(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.assertEqualsFunction(p),
  );
