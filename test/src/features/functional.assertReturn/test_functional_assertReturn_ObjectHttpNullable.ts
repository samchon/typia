import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertReturn_ObjectHttpNullable =
  _test_functional_assertReturn(TypeGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertReturn(p),
  );
