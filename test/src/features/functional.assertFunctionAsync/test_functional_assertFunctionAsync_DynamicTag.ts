import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertFunctionAsync_DynamicTag =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => Promise<DynamicTag>) =>
    typia.functional.assertFunction(p),
  );
