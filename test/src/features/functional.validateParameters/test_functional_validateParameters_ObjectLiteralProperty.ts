import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateParameters_ObjectLiteralProperty =
  (): void =>
    _test_functional_validateParameters("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.validateParameters(p),
    );
