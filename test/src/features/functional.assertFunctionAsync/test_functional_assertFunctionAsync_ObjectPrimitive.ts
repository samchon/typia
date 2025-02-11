import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertFunctionAsync_ObjectPrimitive =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertFunction(p),
  );
