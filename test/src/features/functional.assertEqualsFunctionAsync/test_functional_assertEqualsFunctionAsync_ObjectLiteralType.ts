import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_assertEqualsFunctionAsync_ObjectLiteralType =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectLiteralType",
  )(ObjectLiteralType)(
    (p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
      typia.functional.assertEqualsFunction(p),
  );
