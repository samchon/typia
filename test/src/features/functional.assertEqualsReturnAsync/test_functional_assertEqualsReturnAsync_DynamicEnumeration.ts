import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_DynamicEnumeration =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "DynamicEnumeration",
  )(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      typia.functional.assertEqualsReturn(p),
  );
