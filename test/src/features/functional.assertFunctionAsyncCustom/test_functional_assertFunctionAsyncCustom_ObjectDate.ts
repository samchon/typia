import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectDate = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => Promise<ObjectDate>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)