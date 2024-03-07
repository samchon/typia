import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectPrimitive =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertParameters(p),
  );
