import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
