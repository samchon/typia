import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectHttpNullable = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.assertParameters(p),
)