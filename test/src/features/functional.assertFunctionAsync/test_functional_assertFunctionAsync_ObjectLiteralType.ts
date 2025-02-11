import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertFunctionAsync_ObjectLiteralType =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertFunction(p),
  );
