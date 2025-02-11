import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertFunctionAsyncCustom_DynamicSimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
