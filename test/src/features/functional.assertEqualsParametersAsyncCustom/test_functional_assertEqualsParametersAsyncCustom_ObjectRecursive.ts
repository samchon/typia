import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectRecursive = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)