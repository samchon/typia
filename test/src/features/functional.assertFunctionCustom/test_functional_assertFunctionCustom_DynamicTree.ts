import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertFunctionCustom_DynamicTree =
  _test_functional_assertFunction(CustomGuardError)("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
