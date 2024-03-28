import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertFunctionCustom_ObjectLiteralProperty =
  _test_functional_assertFunction(CustomGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
