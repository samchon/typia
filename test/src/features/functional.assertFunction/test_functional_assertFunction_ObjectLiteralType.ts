import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertFunction_ObjectLiteralType =
  _test_functional_assertFunction(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertFunction(p),
  );
