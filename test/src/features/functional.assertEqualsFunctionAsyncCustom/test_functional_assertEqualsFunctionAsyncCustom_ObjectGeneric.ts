import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectGeneric =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
