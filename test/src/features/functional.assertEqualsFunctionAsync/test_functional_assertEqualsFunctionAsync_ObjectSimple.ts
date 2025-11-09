import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsFunctionAsync_ObjectSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ObjectSimple")(
      ObjectSimple,
    )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.assertEqualsFunction(p),
    );
