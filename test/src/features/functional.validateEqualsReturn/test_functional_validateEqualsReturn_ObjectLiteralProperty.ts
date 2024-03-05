import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateEqualsReturn_ObjectLiteralProperty =
  _test_functional_validateEqualsReturn("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
    typia.functional.validateEqualsReturn(p),
  );
