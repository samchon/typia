import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertFunction_ObjectNullable = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertFunction(p),
  );
