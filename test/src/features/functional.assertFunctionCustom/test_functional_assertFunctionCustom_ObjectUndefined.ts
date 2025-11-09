import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertFunctionCustom_ObjectUndefined = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
