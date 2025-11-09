import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectHttpNullable = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.assertEqualsReturn(p),
)