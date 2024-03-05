import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsReturn_ObjectLiteralType =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertEqualsReturn(p),
  );
