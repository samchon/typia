import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectPartial = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)