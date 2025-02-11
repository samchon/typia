import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_assert_ObjectLiteralType = _test_assert(TypeGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.assert<ObjectLiteralType>(input));
