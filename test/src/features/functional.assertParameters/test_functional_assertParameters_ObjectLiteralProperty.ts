import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertParameters_ObjectLiteralProperty =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.assertParameters(p),
    );
