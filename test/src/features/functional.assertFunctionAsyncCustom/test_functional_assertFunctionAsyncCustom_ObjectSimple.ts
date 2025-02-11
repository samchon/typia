import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertFunctionAsyncCustom_ObjectSimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
