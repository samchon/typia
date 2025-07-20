import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertFunctionAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectGeneric")(
      ObjectGeneric,
    )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.assertFunction(p),
    );
