import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertParametersAsyncCustom_ObjectLiteralType =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
