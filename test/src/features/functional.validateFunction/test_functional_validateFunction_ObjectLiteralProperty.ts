import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateFunction_ObjectLiteralProperty =
  (): void =>
    _test_functional_validateFunction("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.validateFunction(p),
    );
