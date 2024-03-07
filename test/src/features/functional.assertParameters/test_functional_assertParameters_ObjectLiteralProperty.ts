import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectLiteralProperty =
  _test_functional_assertParameters(TypeGuardError)("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )((p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
    typia.functional.assertParameters(p),
  );
