import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectRecursive = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)