import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsFunctionAsync_ObjectGenericArray =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectGenericArray",
  )(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertEqualsFunction(p),
  );
