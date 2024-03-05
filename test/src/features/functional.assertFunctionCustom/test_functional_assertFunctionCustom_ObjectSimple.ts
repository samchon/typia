import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertFunctionCustom_ObjectSimple =
  _test_functional_assertFunction(CustomGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
