import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectLiteralProperty = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)