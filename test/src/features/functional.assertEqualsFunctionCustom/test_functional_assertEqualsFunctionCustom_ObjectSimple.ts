import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsFunctionCustom_ObjectSimple =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
