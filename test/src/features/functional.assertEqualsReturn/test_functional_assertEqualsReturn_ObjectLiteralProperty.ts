import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectLiteralProperty = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.assertEqualsReturn(p),
)