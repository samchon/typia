import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectLiteralType =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectLiteralType",
  )(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
