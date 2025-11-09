import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectUndefined = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)