import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectHttpUndefindable = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectHttpUndefindable"
)(ObjectHttpUndefindable)(
  (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
    typia.functional.assertEqualsParameters(p),
)