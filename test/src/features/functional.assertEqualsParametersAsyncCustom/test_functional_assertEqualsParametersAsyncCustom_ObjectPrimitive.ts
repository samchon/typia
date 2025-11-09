import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectPrimitive = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)