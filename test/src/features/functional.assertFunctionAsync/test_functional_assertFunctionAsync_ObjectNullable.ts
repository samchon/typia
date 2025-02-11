import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertFunctionAsync_ObjectNullable =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertFunction(p),
  );
