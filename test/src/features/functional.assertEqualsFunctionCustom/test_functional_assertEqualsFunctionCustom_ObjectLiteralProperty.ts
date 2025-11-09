import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectLiteralProperty = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)