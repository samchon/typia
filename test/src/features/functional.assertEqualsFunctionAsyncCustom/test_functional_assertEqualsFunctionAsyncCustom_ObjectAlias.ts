import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectAlias =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
