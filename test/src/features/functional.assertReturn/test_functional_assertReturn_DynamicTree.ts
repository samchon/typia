import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicTree =
  _test_functional_assertReturn(TypeGuardError)("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.assertReturn(p),
  );
