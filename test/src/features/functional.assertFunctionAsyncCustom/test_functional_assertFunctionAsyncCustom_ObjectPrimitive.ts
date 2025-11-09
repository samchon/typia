import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectPrimitive = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)