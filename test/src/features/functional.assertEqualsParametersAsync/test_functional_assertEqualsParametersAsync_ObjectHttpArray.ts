import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectHttpArray = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertEqualsParameters(p),
)