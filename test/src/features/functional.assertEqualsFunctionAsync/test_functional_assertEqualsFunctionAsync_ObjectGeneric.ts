import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsFunctionAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectGeneric")(
      ObjectGeneric,
    )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.assertEqualsFunction(p),
    );
