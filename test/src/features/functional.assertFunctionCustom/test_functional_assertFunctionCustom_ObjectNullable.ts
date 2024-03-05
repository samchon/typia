import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertFunctionCustom_ObjectNullable =
  _test_functional_assertFunction(CustomGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => ObjectNullable) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
