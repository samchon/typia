import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectRequired = _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)