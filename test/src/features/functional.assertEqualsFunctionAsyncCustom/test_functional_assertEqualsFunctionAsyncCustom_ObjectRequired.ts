import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectRequired =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectRequired",
  )(ObjectRequired)((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
