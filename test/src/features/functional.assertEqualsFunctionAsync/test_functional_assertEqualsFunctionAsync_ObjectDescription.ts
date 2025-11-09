import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsFunctionAsync_ObjectDescription =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectDescription",
    )(ObjectDescription)(
      (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
        typia.functional.assertEqualsFunction(p),
    );
