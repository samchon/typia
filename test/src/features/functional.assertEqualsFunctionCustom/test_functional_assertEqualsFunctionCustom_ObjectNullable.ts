import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsFunctionCustom_ObjectNullable =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
