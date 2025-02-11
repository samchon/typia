import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_createAssert_ObjectLiteralType = _test_assert(TypeGuardError)(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.createAssert<ObjectLiteralType>(),
);
