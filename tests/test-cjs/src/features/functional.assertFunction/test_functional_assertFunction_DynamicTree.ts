import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_assertFunction_DynamicTree = (): void =>
  _test_functional_assertFunction(TypeGuardError)("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.assertFunction(p),
  );
