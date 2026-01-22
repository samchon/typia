import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertFunctionCustom_ObjectRequired = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
