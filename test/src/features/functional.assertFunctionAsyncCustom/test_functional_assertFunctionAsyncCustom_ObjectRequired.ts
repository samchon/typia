import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertFunctionAsyncCustom_ObjectRequired =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
