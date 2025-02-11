import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertFunctionAsyncCustom_ObjectDynamic =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
