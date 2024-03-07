import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicUndefined =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
    typia.functional.assertFunction(p),
  );
