import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertFunction_ObjectPrimitive =
  _test_functional_assertFunction(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertFunction(p),
  );
