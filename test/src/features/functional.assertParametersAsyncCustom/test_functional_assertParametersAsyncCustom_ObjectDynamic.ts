import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectDynamic = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)