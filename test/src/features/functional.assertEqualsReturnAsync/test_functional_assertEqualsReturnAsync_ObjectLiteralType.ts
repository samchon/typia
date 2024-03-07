import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectLiteralType =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectLiteralType")(
    ObjectLiteralType,
  )((p: (input: ObjectLiteralType) => Promise<ObjectLiteralType>) =>
    typia.functional.assertEqualsReturn(p),
  );
