import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertParametersAsync_ObjectLiteralType =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertParameters(p),
  );
