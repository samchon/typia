import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateEqualsFunction_ObjectLiteralProperty =
  (): void =>
    _test_functional_validateEqualsFunction("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.validateEqualsFunction(p),
    );
