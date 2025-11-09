import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectLiteralType = (): void => _test_assert(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)(typia.createAssert<ObjectLiteralType>((p) => new CustomGuardError(p)));
