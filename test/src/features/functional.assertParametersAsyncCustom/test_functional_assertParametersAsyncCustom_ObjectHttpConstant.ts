import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectHttpConstant = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)