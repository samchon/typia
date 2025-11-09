import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsFunctionAsync_ObjectClosure =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectClosure")(
      ObjectClosure,
    )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.assertEqualsFunction(p),
    );
