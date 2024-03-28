import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertParameters_ObjectPrimitive =
  _test_functional_assertParameters(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertParameters(p),
  );
