import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectDescription = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)