import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertParameters_ObjectNullable =
  _test_functional_assertParameters(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertParameters(p),
  );
