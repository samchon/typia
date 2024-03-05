import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsReturn_DynamicTag =
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.assertEqualsReturn(p),
  );
