import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertFunctionAsyncCustom_ObjectAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
