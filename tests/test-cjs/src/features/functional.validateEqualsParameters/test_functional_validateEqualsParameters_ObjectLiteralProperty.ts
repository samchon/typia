import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateEqualsParameters_ObjectLiteralProperty =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.validateEqualsParameters(p),
    );
