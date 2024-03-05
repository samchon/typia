import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertFunctionCustom_ObjectHttpNullable =
  _test_functional_assertFunction(CustomGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
