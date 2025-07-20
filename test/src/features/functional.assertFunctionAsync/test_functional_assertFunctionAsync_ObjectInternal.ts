import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertFunctionAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertFunction(p),
    );
