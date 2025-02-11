import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsFunction_ObjectGenericArray =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertEqualsFunction(p),
  );
