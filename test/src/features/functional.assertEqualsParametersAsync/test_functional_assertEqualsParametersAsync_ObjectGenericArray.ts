import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectGenericArray = _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.assertEqualsParameters(p),
)