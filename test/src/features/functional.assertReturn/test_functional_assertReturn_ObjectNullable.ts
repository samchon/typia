import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertReturn_ObjectNullable =
  _test_functional_assertReturn(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertReturn(p),
  );
