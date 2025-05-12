import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertParametersCustom_ObjectLiteralProperty =
  _test_functional_assertParameters(CustomGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
