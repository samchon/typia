import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertParameters_DynamicTree =
  _test_functional_assertParameters(TypeGuardError)("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.assertParameters(p),
  );
