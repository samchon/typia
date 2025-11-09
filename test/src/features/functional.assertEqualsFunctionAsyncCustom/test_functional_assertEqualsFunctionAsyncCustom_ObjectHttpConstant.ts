import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpConstant = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)