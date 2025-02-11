import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertFunctionAsync_ObjectRequired =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertFunction(p),
  );
