import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectGeneric = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)