import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsReturnCustom_ObjectNullable =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
