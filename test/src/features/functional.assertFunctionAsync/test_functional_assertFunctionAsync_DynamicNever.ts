import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertFunctionAsync_DynamicNever =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertFunction(p),
  );
