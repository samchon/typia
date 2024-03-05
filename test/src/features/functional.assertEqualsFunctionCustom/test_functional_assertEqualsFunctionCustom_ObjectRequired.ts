import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsFunctionCustom_ObjectRequired =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
