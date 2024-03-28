import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsReturn_ObjectHttpNullable =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertEqualsReturn(p),
  );
