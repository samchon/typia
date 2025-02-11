import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectLiteralType = _test_assert(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)((input) => typia.assert<ObjectLiteralType>(input, (p) => new CustomGuardError(p)));
