import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsFunction_ObjectNullable =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertEqualsFunction(p),
  );
