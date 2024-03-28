import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertFunctionAsync_DynamicSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertFunction(p),
  );
