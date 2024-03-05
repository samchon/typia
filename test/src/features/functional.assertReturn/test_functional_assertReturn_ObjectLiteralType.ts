import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertReturn_ObjectLiteralType =
  _test_functional_assertReturn(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => ObjectLiteralType) =>
    typia.functional.assertReturn(p),
  );
