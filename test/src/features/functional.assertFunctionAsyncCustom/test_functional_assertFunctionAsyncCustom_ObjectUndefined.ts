import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertFunctionAsyncCustom_ObjectUndefined =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
