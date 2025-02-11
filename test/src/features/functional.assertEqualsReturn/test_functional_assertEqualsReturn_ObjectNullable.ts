import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsReturn_ObjectNullable =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertEqualsReturn(p),
  );
