import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_DynamicEnumeration =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "DynamicEnumeration",
  )(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.assertEqualsFunction(p),
  );
