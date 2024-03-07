import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpNullable =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectHttpNullable",
  )(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.assertEqualsFunction(p),
  );
