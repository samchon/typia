import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsFunction_ObjectLiteralType =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)("ObjectLiteralType")(
      ObjectLiteralType,
    )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
      typia.functional.assertEqualsFunction(p),
    );
