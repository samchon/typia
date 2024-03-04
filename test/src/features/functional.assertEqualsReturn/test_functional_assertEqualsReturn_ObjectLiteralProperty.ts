import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsReturn_ObjectLiteralProperty =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
    typia.functional.assertEqualsReturn(p),
  );
