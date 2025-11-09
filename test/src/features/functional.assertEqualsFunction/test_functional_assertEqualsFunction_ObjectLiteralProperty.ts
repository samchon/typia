import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_assertEqualsFunction_ObjectLiteralProperty =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectLiteralProperty",
    )(ObjectLiteralProperty)(
      (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
        typia.functional.assertEqualsFunction(p),
    );
