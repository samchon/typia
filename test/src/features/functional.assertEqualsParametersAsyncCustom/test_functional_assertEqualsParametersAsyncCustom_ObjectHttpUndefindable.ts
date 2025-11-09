import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpUndefindable = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "ObjectHttpUndefindable"
)(ObjectHttpUndefindable)(
  (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)