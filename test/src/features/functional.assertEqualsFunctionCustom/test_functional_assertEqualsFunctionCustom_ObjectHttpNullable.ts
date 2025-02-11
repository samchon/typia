import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsFunctionCustom_ObjectHttpNullable =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
