import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertFunctionAsyncCustom_ObjectGeneric =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
