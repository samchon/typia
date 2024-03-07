import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectDescription =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectDescription",
  )(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertEqualsFunction(p),
  );
