import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectNullable = _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertReturn(p),
)