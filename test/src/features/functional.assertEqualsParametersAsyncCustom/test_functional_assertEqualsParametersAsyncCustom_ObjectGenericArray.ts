import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectGenericArray = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)