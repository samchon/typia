import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectPrimitive = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)