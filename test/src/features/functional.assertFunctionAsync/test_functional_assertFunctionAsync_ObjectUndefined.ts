import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertFunctionAsync_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectUndefined")(
      ObjectUndefined,
    )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.assertFunction(p),
    );
