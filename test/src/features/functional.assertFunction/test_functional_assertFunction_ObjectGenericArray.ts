import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertFunction_ObjectGenericArray = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertFunction(p),
  );
