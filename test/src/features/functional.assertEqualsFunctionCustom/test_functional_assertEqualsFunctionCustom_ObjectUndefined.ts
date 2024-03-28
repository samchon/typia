import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsFunctionCustom_ObjectUndefined =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
