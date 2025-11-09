import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectLiteralType = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectLiteralType",
)<ObjectLiteralType>(
    ObjectLiteralType
)(typia.createAssertEquals<ObjectLiteralType>((p) => new CustomGuardError(p)));
