import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertReturn_DynamicTree =
  _test_functional_assertReturn(TypeGuardError)("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.assertReturn(p),
  );
