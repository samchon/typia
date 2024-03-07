import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectInternal =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectInternal",
  )(ObjectInternal)((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
