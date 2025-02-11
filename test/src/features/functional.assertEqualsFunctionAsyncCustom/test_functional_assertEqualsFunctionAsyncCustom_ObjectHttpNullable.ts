import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpNullable = _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)