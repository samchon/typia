import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectSimple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
