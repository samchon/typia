import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertFunction_ObjectHttpNullable =
  _test_functional_assertFunction(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertFunction(p),
  );
