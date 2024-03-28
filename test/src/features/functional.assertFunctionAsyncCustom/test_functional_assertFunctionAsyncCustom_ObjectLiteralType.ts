import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertFunctionAsyncCustom_ObjectLiteralType =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
