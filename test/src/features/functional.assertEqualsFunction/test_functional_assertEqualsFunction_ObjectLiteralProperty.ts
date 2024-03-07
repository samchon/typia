import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectLiteralProperty =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ObjectLiteralProperty",
  )(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      typia.functional.assertEqualsFunction(p),
  );
