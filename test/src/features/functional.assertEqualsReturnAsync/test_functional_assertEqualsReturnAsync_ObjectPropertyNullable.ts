import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectPropertyNullable = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.assertEqualsReturn(p),
)