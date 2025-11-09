import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectRequired = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)