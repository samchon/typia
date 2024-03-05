import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertFunctionCustom_ObjectPartialAndRequired =
  _test_functional_assertFunction(CustomGuardError)("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
